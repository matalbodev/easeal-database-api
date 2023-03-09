import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Ingredient } from './model/ingredient.model';
import { CreateIngredientInput } from './dto/create-ingredient.input';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => Ingredient)
export class IngredientResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Ingredient)
  createIngredient(@Args('data') createIngredientInput: CreateIngredientInput) {
    return this.prisma.ingredient.create({
      data: {
        name: createIngredientInput.name,
        mainType: createIngredientInput.mainType,
        kcal: createIngredientInput.kcal,
      },
    });
  }

  @Query(() => [Ingredient], { name: 'ingredients' })
  findAll() {
    return this.prisma.ingredient.findMany();
  }
}
