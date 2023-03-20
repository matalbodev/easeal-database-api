import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field(() => String, { description: 'Name of recipe' })
  name: string;

  @Field(() => String, { description: 'Description of recipe' })
  description: string;

  // ingredients is an array of ids
  /*   @Field(() => [RecipeIngredient])
  ingredients: RecipeIngredient[]; */

  /*   @Field((type) => [DayToEat], { description: 'Date when to eat' })
  dayToEat: DayToEat[]; */
}
