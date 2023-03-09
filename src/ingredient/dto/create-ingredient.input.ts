import { InputType, Field } from '@nestjs/graphql';
import { MainType } from '@prisma/client';
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

  @Field()
  @IsNotEmpty()
  kcal: number;
}
