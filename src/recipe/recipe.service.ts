import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeInput: CreateRecipeInput) {
    return 'This action adds a new recipe';
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.prisma.recipe.findMany(recipesArgs);
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeInput: UpdateRecipeInput) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
