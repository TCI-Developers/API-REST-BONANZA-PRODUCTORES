import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { HuertasService } from './huertas.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { HuertasFilterDTO } from './dto/huertas-filter.dto';

@Controller('huertas')
export class HuertasController {

  constructor(private readonly huertasService: HuertasService, private readonly authService: AuthService) {}
  
  @UseGuards(AuthGuard)
  @Get('sagarpa/:sagarpa')
  getAll(@Param('sagarpa') sagarpa: string) {
    return this.huertasService.findOne(sagarpa);
  }

  @UseGuards(AuthGuard)
  @Get('list')
  getPaginated( @Query()  filter: HuertasFilterDTO) {
    return this.huertasService.findAll(filter);
  }


}
