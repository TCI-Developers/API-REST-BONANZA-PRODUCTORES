import { PartialType } from '@nestjs/mapped-types';
import { CreateQuickbaseDto } from './create-quickbase.dto';

export class UpdateQuickbaseDto extends PartialType(CreateQuickbaseDto) {}
