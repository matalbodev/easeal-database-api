import { PartialType } from '@nestjs/swagger';
import { CreateDaytoeatDto } from './create-daytoeat.dto';

export class UpdateDaytoeatDto extends PartialType(CreateDaytoeatDto) {}
