/*
  Warnings:

  - The primary key for the `DayToEat` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "DayToEat" DROP CONSTRAINT "DayToEat_pkey",
ADD CONSTRAINT "DayToEat_pkey" PRIMARY KEY ("recipeId", "userId", "date", "recipeType");
