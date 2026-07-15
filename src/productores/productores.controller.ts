import { Controller, Get, NotFoundException, Param, Query, UseGuards } from '@nestjs/common';
import { ProductoresService } from './productores.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductorFilterDTO } from './dto/productores-filter.dto';

@Controller('productores')
export class ProductoresController {

constructor(private readonly productoresService: ProductoresService) {}

@UseGuards(AuthGuard)
@Get('rfc/:rfc')
async findOne(@Param('rfc') rfc: string) {
  
  throw new NotFoundException();

  //return this.productoresService.findOne(rfc);
  }

@UseGuards(AuthGuard)
@Get('list')
async getAll( @Query() filter: ProductorFilterDTO) {
 
  return this.productoresService.findAll( filter);

}

}
