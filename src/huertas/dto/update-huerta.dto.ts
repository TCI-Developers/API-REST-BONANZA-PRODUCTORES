import { PartialType } from '@nestjs/mapped-types';
import { CreateHuertaDto } from './create-huerta.dto';

export class UpdateHuertaDto extends PartialType(CreateHuertaDto) {}
