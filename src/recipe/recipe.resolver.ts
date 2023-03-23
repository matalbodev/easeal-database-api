import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
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

  @Query(() => Recipe, { name: 'recipe' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  @Query(() => [Recipe], { name: 'recipes', nullable: true })
  async findAllWithIngredients() {
    return await this.prisma.recipe.findMany({
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }
}
