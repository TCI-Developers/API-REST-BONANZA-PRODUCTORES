import { Controller, Get, HttpCode, NotFoundException, Param, Query, UseGuards } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { LotesFilterDTO } from './dto/lotes-filter.dto';

@Controller('lotes')
export class LotesController {
  constructor(private readonly lotesService: LotesService) {}

@UseGuards(AuthGuard)
@Get('folio/:lote')
async getLotes(@Param('lote') lote: string) {
 
   throw new NotFoundException();

 // return this.lotesService.findOne( lote );
}

@UseGuards(AuthGuard)
@Get('list')
async getAllLotes( @Query() filter: LotesFilterDTO) {
 
  return this.lotesService.findAll(filter);

 }
}
