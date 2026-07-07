import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorridasService } from './corridas.service';
import { CreateCorridaDto } from './dto/create-corrida.dto';
import { UpdateCorridaDto } from './dto/update-corrida.dto';

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
