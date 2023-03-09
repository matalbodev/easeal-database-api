import 'reflect-metadata';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { MainType } from 'src/common/enum/ingredient.enum';

registerEnumType(MainType, {
  name: 'MainType',
  description: 'Main type of ingredient',
});

@ObjectType()
export class Ingredient extends BaseModel {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  kcal: number;

  @Field(() => MainType)
  mainType: MainType;
}

export class RecipeIngredient {
  @Field(() => Ingredient)
  ingredient: Ingredient;

  @Field(() => Number)
  amount: number;
}
