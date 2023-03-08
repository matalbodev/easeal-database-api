import { Test, TestingModule } from '@nestjs/testing';
import { RecipeService } from './recipe.service';
import { RecipesArgs } from './dto/recipes.args';
import { PrismaService } from 'nestjs-prisma';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeService, PrismaService],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of recipes', async () => {
    const result = await service.findAll(new RecipesArgs());
    expect(result).toBeInstanceOf(Array);
  });
});
