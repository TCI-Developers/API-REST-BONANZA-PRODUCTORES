import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoresService } from './productores.service';

@Controller('productores')
export class ProductoresController {

  constructor(private readonly productoresService: ProductoresService) {}

  @Get(':rfc')
  findOne(@Param('rfc') rfc: string) {
    return this.productoresService.findOne(rfc);
  }

}
