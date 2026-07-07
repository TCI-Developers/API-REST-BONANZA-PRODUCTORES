import { Injectable, NotFoundException } from '@nestjs/common';
import { QuickbaseClient } from 'src/integrations/quickbase/quickbase.client';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { RECOS_FIELD_MAP } from './mapper/recos.map';
import { RecosDTO } from './dto/recos.dto';
import { RecosRepository } from './repository/reco.repository';
import { filter } from 'rxjs';
import { RecoFilterDTO } from './dto/reco-filter.dto';
import { QuickbaseWhereBuilder } from 'src/integrations/builders/quickbase-where.builder';
import { RECO_FILTER_MAP } from './mapper/reco-filter.map';
import { QuickbaseQueryBuilder } from 'src/integrations/builders/quickbase-query.builder';


@Injectable()
export class RecosService {

  private tableId = process.env.QUICKBASE_TABLE_RECOS;

  constructor( 
      
      private readonly mapaper: QuickbaseMapper,
      private readonly recosRepository: RecosRepository){}


  async findOne(reco: string){
  
     console.log('RECO:'+ reco);
    const where = new QuickbaseWhereBuilder().build(
      { reco },
      RECO_FILTER_MAP
    );

    const query = new QuickbaseQueryBuilder()
      .table(this.tableId!)
      .fields(RECOS_FIELD_MAP)
      .where(where)
      .sort(3,'ASC')
      .build();

    const response = await this.recosRepository.getRecos(query);  

    const recos = this.mapaper.toDomain<RecosDTO>(
      response,
      RECOS_FIELD_MAP
    );

    

    if (!recos.length) {
      throw new NotFoundException(
        `Reco No Existe: ${reco}`,   
      );
    }

    return recos;

  }



}
