import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuickbaseService } from './quickbase.service';
import { CreateQuickbaseDto } from './dto/create-quickbase.dto';
import { UpdateQuickbaseDto } from './dto/update-quickbase.dto';

@Controller('quickbase')
export class QuickbaseController {
  constructor(private readonly quickbaseService: QuickbaseService) {}

  @Post()
  create(@Body() createQuickbaseDto: CreateQuickbaseDto) {
    return this.quickbaseService.create(createQuickbaseDto);
  }

  @Get()
  findAll() {
    return this.quickbaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quickbaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuickbaseDto: UpdateQuickbaseDto) {
    return this.quickbaseService.update(+id, updateQuickbaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quickbaseService.remove(+id);
  }
}
