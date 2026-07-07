import { Controller, Get, Param, Query, UseGuards, } from '@nestjs/common';
import { RecosService } from './recos.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RecoFilterDTO } from './dto/reco-filter.dto';

@Controller('recos')
export class RecosController {
  
  constructor(private readonly recosService: RecosService) {}

  @UseGuards(AuthGuard)
  @Get('folio/:reco')
  findOne(@Param('reco') reco: string ) {
    return this.recosService.findOne(reco);
  }

}
