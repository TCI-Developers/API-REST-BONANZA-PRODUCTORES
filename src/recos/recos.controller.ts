import { Controller, Get, Param, Query, UseGuards, } from '@nestjs/common';
import { RecosService } from './recos.service';
import { BlockedGuard } from 'src/auth/blocked.guard';
import { RecoFilterDTO } from './dto/reco-filter.dto';

@UseGuards(BlockedGuard)
@Controller('recos')
export class RecosController {
  
  constructor(private readonly recosService: RecosService) {}

  @Get('folio/:reco')
  findOne(@Param('reco') reco: string ) {
    return this.recosService.findOne(reco);
  }

}
