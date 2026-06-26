import { Injectable, NotFoundException } from '@nestjs/common';
import { QuickbaseClient } from 'src/integrations/quickbase/quickbase.client';
import { HUERTAS_FIELD_MAP } from './huertas.map';
import { HuertaDTO } from './dto/huerta.dto'
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';

@Injectable()
export class HuertasService {


private tableId = process.env.QUICKBASE_TABLE_HUERTAS;

constructor( private readonly qb: QuickbaseClient, private readonly mapper : QuickbaseMapper ){}

async findOne( sagarpa: string) {

  const response = await this.qb.query( this.tableId!, {

    select: Object.keys(HUERTAS_FIELD_MAP).map(Number),
    where: `{7.EX.'${sagarpa}'}`,
  
   });

   const registros = this.mapper.toDomain<HuertaDTO>(
    response,
    HUERTAS_FIELD_MAP
   );

  if (!registros.length) {
    throw new NotFoundException(
      `Huerta No Existe: ${sagarpa}`,
    );
  }

    return registros ;
}

async getPaginated( page:number, limit: number) {
  
  const offset = (page - 1) * limit;

  const res = await this.qb.query(this.tableId!,{
    select: [7,6,254,255],
    options: {
      skip: offset,
      top: limit,
    }
    
  });

  return {
    page, 
    limit, 
    data: res?.data || [],
  } 
}

async create(data: any) {
  return this.qb.createRecord(this.tableId!,{fields:data});
}
  
async update( recorId: number, data: any) {
  return this.qb.updateRecord(this.tableId!,{
    fields: {
      3: recorId,
      ...data,
    }
  });

 }
}
