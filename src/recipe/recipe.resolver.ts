import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { RecipesArgs } from './dto/recipes.args';
import { PrismaService } from 'nestjs-prisma';
import { CreateRecipeInput } from './dto/create-recipe.input';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private prisma: PrismaService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Recipe)
  createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput
  ) {
    return this.prisma.recipe.create({
      data: {
        name: createRecipeInput.name,
        description: createRecipeInput.description,
      },
    });
  }

  @Query(() => [Recipe], { name: 'recipes' })
  findAll(@Args() recipesArgs: RecipesArgs) {
    return this.prisma.recipe.findMany(recipesArgs);
  }
}
