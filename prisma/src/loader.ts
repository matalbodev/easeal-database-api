import { MainType, PrismaClient } from '@prisma/client';
import axios from 'axios';
import vegetables = require('./sources/vegetables.json');

const prisma = new PrismaClient();

export const loadFruits = async () => {
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
          mainType: highestNutrition as MainType,
          classification: 'fruit',
        },
      });

      console.log(`Created ingredient: ${ingredient.name}`);
    }
  );
};

export const loadVegetables = async () => {
  vegetables.forEach(async (vegetable: { name: string; kcal: number }) => {
    const ingredient = await prisma.ingredient.create({
      data: {
        name: vegetable.name,
        kcal: vegetable.kcal,
        mainType: 'fiber',
        classification: 'vegetable',
      },
    });

    console.log(`Created vegetable: ${ingredient.name}`);
  });
};
