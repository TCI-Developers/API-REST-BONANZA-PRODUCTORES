import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

@Controller('lotes')
export class LotesController {
  constructor(private readonly lotesService: LotesService) {}


@Get()
getLotes( @Query('rfc') rfc: string, @Query('fecha_corte_desde') inicio?: string, @Query('fecha_corte_hasta') fin?: string,) {
 
  return this.lotesService.getLotes(rfc, inicio, fin);

}
  
}
