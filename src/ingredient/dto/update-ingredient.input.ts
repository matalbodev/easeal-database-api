import { CreateIngredientInput } from './create-ingredient.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIngredientInput extends PartialType(CreateIngredientInput) {
  @Field(() => String)
  id: string;
}
