import { Test, TestingModule } from '@nestjs/testing';
import { RecipeResolver } from './recipe.resolver';
import { PrismaService } from 'nestjs-prisma';

describe('RecipeResolver', () => {
  let resolver: RecipeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeResolver, PrismaService],
    }).compile();

    resolver = module.get<RecipeResolver>(RecipeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a recipe', async () => {
    const result = await resolver.createRecipe({
      name: 'Test Recipe',
      description: 'Test Description',
    });
    expect(result).toBeInstanceOf(Object);
  });
});
