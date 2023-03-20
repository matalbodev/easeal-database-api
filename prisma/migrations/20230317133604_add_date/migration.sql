-- CreateEnum
CREATE TYPE "RecipeType" AS ENUM ('breakfast', 'lunch', 'dinner', 'snack');

-- CreateTable
CREATE TABLE "DayToEat" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "recipeId" TEXT NOT NULL,
    "recipeType" "RecipeType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DayToEat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DayToEat" ADD CONSTRAINT "DayToEat_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DayToEat" ADD CONSTRAINT "DayToEat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
