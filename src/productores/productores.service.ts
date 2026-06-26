import { Injectable, NotFoundException } from '@nestjs/common';

import { QuickbaseClient } from '../integrations/quickbase/quickbase.client';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { PRODUCTOR_FIELD_MAP } from './productor.map';
import { ProductorDTO } from './dto/productor.tdo';

@Injectable()
export class ProductoresService {
  
  private tableId = process.env.QUICKBASE_TABLE_PRODUCTORES;

  constructor( 
    private readonly qb: QuickbaseClient,
    private readonly mapper: QuickbaseMapper
  ){}

  async findOne( rfc: string){
    const response = await this.qb.query( this.tableId!, {
      select: Object.keys(PRODUCTOR_FIELD_MAP).map(Number),
      where: `{71.EX.'${rfc}'}`,
    });

    const registros = this.mapper.toDomain<ProductorDTO>(
      response,
      PRODUCTOR_FIELD_MAP
    );

    if (!registros.length) {
      throw new NotFoundException(
          `Rfc No Existe: ${rfc}`,

      );
    }

    return registros;
  }
}
