import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { Daytoeat } from './model/daytoeat.model';
import { CreateDaytoeatDto } from './dto/create-daytoeat.dto';

@Resolver(() => Daytoeat)
export class DaytoeatResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Daytoeat)
  createDaytoeat(@Args('data') data: CreateDaytoeatDto) {
    return this.prisma.dayToEat.create({
      data: {
        date: data.date,
        recipeType: data.recipeType,
        recipe: {
          connect: {
            id: data.recipeId,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }

  @Query(() => [Daytoeat], { name: 'daytoeats' })
  findAll() {
    return this.prisma.dayToEat.findMany();
  }
}
