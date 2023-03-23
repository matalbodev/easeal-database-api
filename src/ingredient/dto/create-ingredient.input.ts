import { InputType, Field } from '@nestjs/graphql';
import { Classification, MainType } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateIngredientInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @IsEnum(MainType)
  @Field(() => String)
  @IsNotEmpty()
  mainType: MainType;

  @IsEnum(Classification)
  @Field(() => String)
  @IsNotEmpty()
  classification: Classification;

  @Field()
  @IsNotEmpty()
  kcal: number;
}
