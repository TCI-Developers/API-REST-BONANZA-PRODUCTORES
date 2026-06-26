import { Injectable } from '@nestjs/common';
import { CreateQuickbaseDto } from './dto/create-quickbase.dto';
import { UpdateQuickbaseDto } from './dto/update-quickbase.dto';

@Injectable()
export class QuickbaseService {
  create(createQuickbaseDto: CreateQuickbaseDto) {
    return 'This action adds a new quickbase';
  }

  findAll() {
    return `This action returns all quickbase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quickbase`;
  }

  update(id: number, updateQuickbaseDto: UpdateQuickbaseDto) {
    return `This action updates a #${id} quickbase`;
  }

  remove(id: number) {
    return `This action removes a #${id} quickbase`;
  }
}
