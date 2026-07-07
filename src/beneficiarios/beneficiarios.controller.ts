import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { BlockedGuard } from 'src/auth/blocked.guard';
import { BeneficiarioFilterDTO } from './dto/beneficiario-filter.dto';

@UseGuards(BlockedGuard)
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
