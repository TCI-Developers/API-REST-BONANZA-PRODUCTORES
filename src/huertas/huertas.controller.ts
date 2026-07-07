import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { HuertasService } from './huertas.service';
import { AuthService } from 'src/auth/auth.service';
import { BlockedGuard } from 'src/auth/blocked.guard';
import { HuertasFilterDTO } from './dto/huertas-filter.dto';

@UseGuards(BlockedGuard)
@Controller('huertas')
export class HuertasController {

  constructor(private readonly huertasService: HuertasService, private readonly authService: AuthService) {}
  
  @Get('sagarpa/:sagarpa')
  getAll(@Param('sagarpa') sagarpa: string) {
    return this.huertasService.findOne(sagarpa);
  }

  @Get('list')
  getPaginated( @Query()  filter: HuertasFilterDTO) {
    return this.huertasService.findAll(filter);
  }


}
