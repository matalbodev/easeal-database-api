import { ObjectType, Field } from '@nestjs/graphql';
import { Ingredient } from 'src/ingredient/model/ingredient.model';

@ObjectType()
export class RecipeIngredient {
  @Field(() => Ingredient)
  ingredient: Ingredient;

  @Field(() => Number)
  amount: number;
}
