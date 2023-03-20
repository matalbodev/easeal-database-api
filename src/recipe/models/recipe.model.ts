import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { DayToEat } from './day-to-eat.model';
import { RecipeIngredient } from './recipe-ingredient.model';

@ObjectType()
export class Recipe extends BaseModel {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [DayToEat])
  dayToEat: DayToEat[];

  @Field(() => [RecipeIngredient])
  ingredients: RecipeIngredient[];
}
