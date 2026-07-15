import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CorridasService } from './corridas.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('corridas')
export class CorridasController {
  constructor(private readonly corridasService: CorridasService) {}

  
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.corridasService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corridasService.findOne(+id);
  }

  
}
