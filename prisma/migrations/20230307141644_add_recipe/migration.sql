-- CreateTable
CREATE TABLE "Recipe" (
    "uuid" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "kcal" INTEGER NOT NULL DEFAULT 0,
    "authorId" TEXT,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "RecipeIngredient" (
    "recipeUuid" UUID NOT NULL,
    "ingredientUuid" UUID NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "RecipeIngredient_pkey" PRIMARY KEY ("recipeUuid","ingredientUuid")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_recipeUuid_fkey" FOREIGN KEY ("recipeUuid") REFERENCES "Recipe"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_ingredientUuid_fkey" FOREIGN KEY ("ingredientUuid") REFERENCES "Ingredient"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
