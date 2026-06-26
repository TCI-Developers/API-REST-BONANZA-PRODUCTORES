import { PartialType } from '@nestjs/mapped-types';
import { CreateRecoDto } from './create-reco.dto';

export class UpdateRecoDto extends PartialType(CreateRecoDto) {}
