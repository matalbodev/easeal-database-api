import { Module } from '@nestjs/common';
import { IngredientResolver } from './ingredient.resolver';

@Module({
  providers: [IngredientResolver],
})
export class IngredientModule {}
