import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcuerdosService } from './acuerdos.service';
import { CreateAcuerdoDto } from './dto/create-acuerdo.dto';
import { UpdateAcuerdoDto } from './dto/update-acuerdo.dto';

@Controller('acuerdos')
export class AcuerdosController {
  constructor(private readonly acuerdosService: AcuerdosService) {}

  @Post()
  create(@Body() createAcuerdoDto: CreateAcuerdoDto) {
    return this.acuerdosService.create(createAcuerdoDto);
  }

  @Get()
  findAll() {
    return this.acuerdosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acuerdosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcuerdoDto: UpdateAcuerdoDto) {
    return this.acuerdosService.update(+id, updateAcuerdoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acuerdosService.remove(+id);
  }
}
