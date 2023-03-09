import { InputType, Int, Field } from '@nestjs/graphql';
import { RecipeIngredient } from 'src/ingredient/model/ingredient.model';

@InputType()
export class CreateRecipeInput {
  @Field(() => String, { description: 'Name of recipe' })
  name: string;

  @Field(() => String, { description: 'Description of recipe' })
  description: string;

  // ingredients is an array of ids
  /*   @Field(() => [RecipeIngredient])
  ingredients: RecipeIngredient[]; */
}
