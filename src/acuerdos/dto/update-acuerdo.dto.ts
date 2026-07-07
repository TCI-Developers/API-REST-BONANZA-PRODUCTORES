import { PartialType } from '@nestjs/mapped-types';
import { CreateAcuerdoDto } from './create-acuerdo.dto';

export class UpdateAcuerdoDto extends PartialType(CreateAcuerdoDto) {}
