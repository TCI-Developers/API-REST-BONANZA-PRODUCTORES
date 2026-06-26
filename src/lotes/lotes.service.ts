import { BadRequestException, Injectable } from '@nestjs/common';
import { QuickbaseClient } from 'src/integrations/quickbase/quickbase.client';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { LOTES_FIELD_MAP } from './lotes.map';
import { LotesDTO } from './dto/lotes.dto';

@Injectable()
export class LotesService {

  private tableId = process.env.QUICKBASE_TABLE_LOTES;

  constructor(
    private readonly qb: QuickbaseClient,
    private readonly mapper : QuickbaseMapper
  ){}

  async getLotes(rfc: string, fecha_corte_desde?: string, fecha_corte_hasta?: string) {

    if (!rfc?.trim()) {
      throw new BadRequestException('El parametro "rfc" es obligatorio ');
    }

    const filters:string[] = [];

    //RFC Obligarorio
    filters.push(`{781.EX.'${rfc}'}`);
   
    //Verificar que vengan ambas fechas
  if (fecha_corte_desde || fecha_corte_hasta) {
    if (!fecha_corte_desde || !fecha_corte_hasta) {
      throw new BadRequestException('Debes enviar fecha_corte_desde y fecha_corte_hasta');
    }

    filters.push(`{324.GTE.'${fecha_corte_desde}'}`);
    filters.push(`{324.LTE.'${fecha_corte_hasta}'}`);
  }

  const where = filters.join('AND');

    const response = await this.qb.query( this.tableId!,{
      select: Object.keys(LOTES_FIELD_MAP).map(Number),
      where,
    });

    const lotes = this.mapper.toDomain<LotesDTO>(
      response,
      LOTES_FIELD_MAP,
    );

    return { 
      total: lotes.length,
      lotes,

     };

  }


  async getPaginated( rfc: string, page:number, limit: number) {
  
  const offset = (page - 1) * limit;


  const response = await this.qb.query(this.tableId!,{
    select: Object.keys(LOTES_FIELD_MAP).map(Number),
    options: {
      skip: offset,
      top: limit,
    }
    
  });

  const lotes = this.mapper.toDomain<LotesDTO>(
    response,
    LOTES_FIELD_MAP,
  )


  return {
    page, 
    limit, 
    data: lotes || [],
  } 
}

}
