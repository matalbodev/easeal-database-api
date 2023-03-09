import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { RecipeIngredient } from 'src/ingredient/model/ingredient.model';

@ObjectType()
export class Recipe extends BaseModel {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  /*   @Field(() => [RecipeIngredient])
  ingredients: RecipeIngredient[]; */
}
