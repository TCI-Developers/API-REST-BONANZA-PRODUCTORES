import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { LotesFilterDTO } from './dto/lotes-filter.dto';

@Controller('lotes')
export class LotesController {
  constructor(private readonly lotesService: LotesService) {}



@UseGuards(AuthGuard)
@Get('folio/:lote')
getLotes(@Param('lote') lote: string) {

  return this.lotesService.findOne( lote );

}

@UseGuards(AuthGuard)
@Get('list')
getAllLotes( 
@Query() filter: LotesFilterDTO) {
 
  return this.lotesService.findAll(filter);

}




}
