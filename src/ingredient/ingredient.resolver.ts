import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Ingredient } from './models/ingredient.model';
import { CreateIngredientInput } from './dto/create-ingredient.input';
import { PrismaService } from 'nestjs-prisma';
import { IngredientConnection } from './models/ingredient-connection.model';
import { PaginationArgs } from 'src/common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

@Resolver(() => Ingredient)
export class IngredientResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Ingredient)
  createIngredient(@Args('data') createIngredientInput: CreateIngredientInput) {
    return this.prisma.ingredient.create({
      data: {
        name: createIngredientInput.name,
        mainType: createIngredientInput.mainType,
        classification: createIngredientInput.classification,
        kcal: createIngredientInput.kcal,
      },
    });
  }

  // paginate response
  @Query(() => IngredientConnection, { name: 'ingredients' })
  async findAll(@Args() { after, before, first, last }: PaginationArgs) {
    const a = await findManyCursorConnection(
      (args) =>
        this.prisma.ingredient.findMany({
          ...args,
        }),
      () => this.prisma.ingredient.count(),
      { first, last, before, after }
    );

    return a;
  }
}
