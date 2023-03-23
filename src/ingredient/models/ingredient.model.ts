import 'reflect-metadata';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { MainType, Classification } from 'src/common/enum/ingredient.enum';

registerEnumType(MainType, {
  name: 'MainType',
  description: 'Main type of ingredient',
});
registerEnumType(Classification, {
  name: 'Classification',
  description: 'Main type of ingredient',
});

@ObjectType()
export class Ingredient extends BaseModel {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  kcal: number;

  @Field(() => Classification)
  classification: Classification;

  @Field(() => MainType)
  mainType: MainType;
}
