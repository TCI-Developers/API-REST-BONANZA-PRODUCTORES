import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { AuthGuard } from 'src/auth/auth.guard';

import { BeneficiarioFilterDTO } from './dto/beneficiario-filter.dto';

@Controller('beneficiarios')
export class BeneficiariosController {
  constructor(private readonly beneficiariosService: BeneficiariosService) {}

  

  @UseGuards(AuthGuard)
  @Get('list')
  findAll(@Query() filter: BeneficiarioFilterDTO) {
    return this.beneficiariosService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosService.findOne(+id);
  }

}
