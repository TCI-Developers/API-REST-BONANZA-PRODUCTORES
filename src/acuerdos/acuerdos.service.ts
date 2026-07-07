import { Injectable } from '@nestjs/common';
import { CreateAcuerdoDto } from './dto/create-acuerdo.dto';
import { UpdateAcuerdoDto } from './dto/update-acuerdo.dto';

@Injectable()
export class AcuerdosService {
  create(createAcuerdoDto: CreateAcuerdoDto) {
    return 'This action adds a new acuerdo';
  }

  findAll() {
    return `This action returns all acuerdos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acuerdo`;
  }

  update(id: number, updateAcuerdoDto: UpdateAcuerdoDto) {
    return `This action updates a #${id} acuerdo`;
  }

  remove(id: number) {
    return `This action removes a #${id} acuerdo`;
  }
}
