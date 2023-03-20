import { Field, InputType } from '@nestjs/graphql';
import { RecipeType } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateDaytoeatDto {
  @Field()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsEnum(RecipeType)
  @Field(() => String)
  @IsNotEmpty()
  recipeType: RecipeType;

  @Field()
  recipeId: string;

  @Field()
  userId: string;
}
