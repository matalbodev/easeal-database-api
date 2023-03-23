import { PrismaClient } from '@prisma/client';
import { loadFruits, loadVegetables } from './src/loader';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.dayToEat.deleteMany();
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

  const pasta = await prisma.ingredient.create({
    data: {
      name: 'Pasta',
      kcal: 100,
      mainType: 'carbohydrates',
      classification: 'pasta',
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
              connect: {
                id: pasta.id,
              },
            },
          },
        ],
      },
    },
  });

  const dayToEat1 = await prisma.dayToEat.create({
    data: {
      date: new Date(),
      recipeType: 'breakfast',
      recipe: {
        connect: {
          id: recipe1.id,
        },
      },
      user: {
        connect: {
          id: user1.id,
        },
      },
    },
  });

  console.log({ user1, user2, recipe1, dayToEat1 });

  await loadFruits();
  await loadVegetables();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
