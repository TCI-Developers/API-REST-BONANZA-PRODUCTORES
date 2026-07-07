import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ProductoresService } from './productores.service';
import { BlockedGuard } from 'src/auth/blocked.guard';
import { ProductorFilterDTO } from './dto/productores-filter.dto';

@UseGuards(BlockedGuard)
@Controller('productores')
export class ProductoresController {

constructor(private readonly productoresService: ProductoresService) {}

@UseGuards(AuthGuard)
@Get('rfc/:rfc')
findOne(@Param('rfc') rfc: string) {
  return this.productoresService.findOne(rfc);
  }

@UseGuards(AuthGuard)
@Get('list')
getAll( @Query() filter: ProductorFilterDTO) {
 
  return this.productoresService.findAll( filter);

}

@UseGuards(AuthGuard)
@Get('list/sync')
getAllModifid( 
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Query('limit' , new DefaultValuePipe(20), ParseIntPipe) limit: number,
  @Query('fecha_desde') inicio: string, 
  @Query('fecha_hasta') fin: string,
) {
 
  //return this.productoresService.findAll( page, limit, inicio, fin);

}
}
