/*
  Warnings:

  - The primary key for the `DayToEat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `DayToEat` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `DayToEat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `DayToEat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DayToEat" DROP CONSTRAINT "DayToEat_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
ADD CONSTRAINT "DayToEat_pkey" PRIMARY KEY ("recipeId", "userId");
