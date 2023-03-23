import { ObjectType } from '@nestjs/graphql';
import PaginatedResponse from 'src/common/pagination/pagination';
import { Ingredient } from './ingredient.model';

@ObjectType()
export class IngredientConnection extends PaginatedResponse(Ingredient) {}
