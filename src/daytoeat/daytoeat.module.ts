import { Module } from '@nestjs/common';
import { DaytoeatResolver } from './daytoeat.resolver';

@Module({
  providers: [DaytoeatResolver],
})
export class DaytoeatModule {}
