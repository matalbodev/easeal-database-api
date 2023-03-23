/*
  Warnings:

  - Added the required column `classification` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Classification" AS ENUM ('vegetable', 'fruit', 'meat', 'fish', 'egg', 'dairy', 'cereals', 'rice', 'pasta', 'oil', 'nuts', 'spices', 'herbs', 'alcohol', 'other');

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "classification" "Classification" NOT NULL;
