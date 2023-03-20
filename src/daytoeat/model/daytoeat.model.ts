import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { RecipeType } from 'src/common/enum/recipe.enum';
import { Recipe } from 'src/recipe/models/recipe.model';
import { User } from 'src/users/models/user.model';

registerEnumType(RecipeType, {
  name: 'RecipeType',
  description: 'Type of recipe',
});

@ObjectType()
export class Daytoeat {
  date: Date;
  recipeType: RecipeType;
  recipe: Recipe;
  user: User;
}
