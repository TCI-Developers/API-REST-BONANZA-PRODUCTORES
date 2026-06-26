import { Injectable, NotFoundException } from '@nestjs/common';
import { QuickbaseClient } from 'src/integrations/quickbase/quickbase.client';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { RECOS_FIELD_MAP } from './recos.map';
import { RecosDTO } from './dto/recos.dto';


@Injectable()
export class RecosService {

  private tableId = process.env.QUICKBASE_TABLE_RECOS;

  constructor( private readonly qb: QuickbaseClient, private readonly mapaper: QuickbaseMapper){}


  async findOne(reco: string){
  
    const response = await this.qb.query( this.tableId!, {
      select: Object.keys(RECOS_FIELD_MAP).map(Number),
      where : `{108.EX.'${reco}'}`,
    });

    const bico = this.mapaper.toDomain<RecosDTO>(
      response,
    RECOS_FIELD_MAP
    );

    if (!bico.length) {
      throw new NotFoundException(
        `Rfc No Existe: ${reco}`,   
      );
    }

    return bico;

  }



}
