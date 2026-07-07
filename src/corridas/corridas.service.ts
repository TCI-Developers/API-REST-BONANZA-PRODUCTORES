import { Injectable } from '@nestjs/common';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { QuickbaseQueryBuilder } from 'src/integrations/builders/quickbase-query.builder';
import { CORRIDAS_FIELD_MAP } from './mapper/corrida.map';
import { CorridaDTO } from './dto/corrida.dto';
import { CorridaRepository } from './repository/corrida.repository';

@Injectable()
export class CorridasService {

  private tableId = process.env.QB_TABLE_CORRIDAS;

   constructor ( 
    private readonly mapper: QuickbaseMapper,
    private readonly  corridasRepository: CorridaRepository
   ){}

  //relationship
   async findByLotesIds( ids: number[]){
    if (ids.length === 0) {
       return [];
    }

    const where = ids
      .map( id => `{6.EX.'${id}'}` )
      .join('OR');

    const query  =  new QuickbaseQueryBuilder()
      .table(this.tableId!)
      .fields(CORRIDAS_FIELD_MAP)
      .where(where)
      .build();

    const response = await this.corridasRepository.getCorridas(query);  

    return this.mapper.toDomain<CorridaDTO>(
      response,
      CORRIDAS_FIELD_MAP
    );

   } 

  findAll() {
    return `This action returns all corridas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corrida`;
  }

  
}
