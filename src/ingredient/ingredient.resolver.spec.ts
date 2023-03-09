import { Test, TestingModule } from '@nestjs/testing';
import { IngredientResolver } from './ingredient.resolver';
import { PrismaService } from 'nestjs-prisma';

describe('IngredientResolver', () => {
  let resolver: IngredientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientResolver, PrismaService],
    }).compile();

    resolver = module.get<IngredientResolver>(IngredientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return an array of ingredients', async () => {
    const result = await resolver.findAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('should create an ingredient', async () => {
    const result = await resolver.createIngredient({
      name: 'Test Ingredient',
      mainType: 'carbohydrates',
      kcal: 100,
    });
    expect(result).toBeInstanceOf(Object);
  });
});
