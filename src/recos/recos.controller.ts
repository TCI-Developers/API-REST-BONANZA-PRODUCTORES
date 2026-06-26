import { Controller, Get, Param, } from '@nestjs/common';
import { RecosService } from './recos.service';

@Controller('recos')
export class RecosController {
  
  constructor(private readonly recosService: RecosService) {}


  @Get(':reco')
  findOne(@Param('reco') reco: string) {
    return this.recosService.findOne(reco);
  }

}
