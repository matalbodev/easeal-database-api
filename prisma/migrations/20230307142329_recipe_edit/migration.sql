/*
  Warnings:

  - You are about to drop the column `kcal` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "kcal",
ADD COLUMN     "description" VARCHAR(255) NOT NULL;
