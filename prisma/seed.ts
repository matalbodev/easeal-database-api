import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

const loadFruits = async () => {
  const response = await axios.get('https://fruityvice.com/api/fruit/all');
  const fruits = response.data;

  // loop through the data and create a new ingredient for each fruit
  fruits.forEach(
    async (fruit: {
      name: string;
      nutritions: {
        calories: number;
        carbohydrates: number;
        fat: number;
        protein: number;
      };
    }) => {
      const nutritions = fruit.nutritions;
      const nutritionsClone = { ...nutritions };
      delete nutritionsClone.calories;
      const highestNutrition = Object.keys(nutritionsClone).reduce((a, b) =>
        nutritionsClone[a] > nutritionsClone[b] ? a : b
      );

      const ingredient = await prisma.ingredient.create({
        data: {
          name: fruit.name,
          kcal: fruit.nutritions.calories,
          mainType: highestNutrition,
        },
      });

      console.log(`Created ingredient: ${ingredient.name}`);
    }
  );
};

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.recipeIngredient.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.ingredient.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa@simpson.com',
      firstname: 'Lisa',
      lastname: 'Simpson',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: 'USER',
      posts: {
        create: {
          title: 'Join us for Prisma Day 2019 in Berlin',
          content: 'https://www.prisma.io/day/',
          published: true,
        },
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart@simpson.com',
      firstname: 'Bart',
      lastname: 'Simpson',
      role: 'ADMIN',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: false,
          },
        ],
      },
    },
  });

  const recipe1 = await prisma.recipe.create({
    data: {
      name: 'Pasta',
      description: 'Pasta with tomato sauce',
      ingredients: {
        create: [
          {
            amount: 1,
            ingredient: {
              create: {
                name: 'Pasta',
                kcal: 100,
                mainType: 'CARBOHYDRATE',
              },
            },
          },
        ],
      },
    },
  });

  console.log({ user1, user2, recipe1 });

  await loadFruits();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
