import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class DayToEat extends BaseModel {
  @Field(() => Date)
  date: Date;

  @Field(() => String)
  recipeType: string;
}
