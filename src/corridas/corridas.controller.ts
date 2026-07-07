import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CorridasService } from './corridas.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('corridas')
export class CorridasController {
  constructor(private readonly corridasService: CorridasService) {}

  

  @Get()
  findAll() {
    return this.corridasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corridasService.findOne(+id);
  }

  
}
