import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HuertasService } from './huertas.service';

@Controller('huertas')
export class HuertasController {

  constructor(private readonly huertasService: HuertasService) {}

  @Get(':sagarpa')
  getAll(@Param('sagarpa') sagarpa: string) {
    return this.huertasService.findOne(sagarpa);
  }

  @Get('paginated')
    getPaginated(
      @Query('page') page = 1,
      @Query('limit') limit = 10,
    ) {
    return this.huertasService.getPaginated(Number(page), Number(limit));
  }

  @Post()
  create(@Body() body: any) {
    return this.huertasService.create(body);
  }

}
