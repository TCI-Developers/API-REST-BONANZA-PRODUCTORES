import { Injectable, NotFoundException } from '@nestjs/common';
import { QuickbaseClient } from 'src/integrations/quickbase/quickbase.client';
import { HUERTAS_FIELD_MAP } from './mappers/huertas.map';
import { HuertaDTO } from './dto/huerta.dto'
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { HuertasFilterDTO } from './dto/huertas-filter.dto';
import { HuertasRepository } from './repository/huertas.repository';
import { QuickbaseWhereBuilder } from 'src/integrations/builders/quickbase-where.builder';
import { HUERTAS_FILTER_MAP } from './mappers/huertas-filter.map';
import { QuickbaseQueryBuilder } from 'src/integrations/builders/quickbase-query.builder';
import { PaginationUtil } from 'src/shared/pagination/pagination.util';



@Injectable()
export class HuertasService {


private tableId = process.env.QUICKBASE_TABLE_HUERTAS;

constructor( 
  private readonly qb: QuickbaseClient, 
  private readonly mapper : QuickbaseMapper,
  private readonly huertasRepository: HuertasRepository
){}

async findOne( sagarpa: string) {

  const where = new QuickbaseWhereBuilder().build({sagarpa},HUERTAS_FILTER_MAP);

  const query = new QuickbaseQueryBuilder()
    .table( this.tableId!)
    .fields(HUERTAS_FIELD_MAP)
    .where(where)
    .page(1,1)
    .build();

  const response = await this.huertasRepository.getHuertas(query);

  const huertas = this.mapper.toDomain<HuertaDTO>(
    response,
    HUERTAS_FIELD_MAP
  );

  if (!huertas.length) {
    throw new NotFoundException(
      `Sagarpa No Existe: ${sagarpa}`,
    );
  }
    
  return huertas;
}

async findAll( filter: HuertasFilterDTO) {

  const page = filter.page ?? 1;
  const limit = filter.limit ?? 20;

  if (filter.fecha_desde && !filter.fecha_hasta) {
      filter.fecha_hasta = filter.fecha_desde;     
     }


  const where = new QuickbaseWhereBuilder().build(
    filter,
    HUERTAS_FILTER_MAP,
  );

  //console.log(filter);
  //console.log(where);

  const query = new QuickbaseQueryBuilder()
    .table(this.tableId!)
    .fields(HUERTAS_FIELD_MAP)
    .where(where)
    .sort(9,'ASC')
    .page(page, limit)
    .build();

  const response = await this.huertasRepository.getHuertas(query);

  const huertas = this.mapper.toDomain<HuertaDTO>(
    response,
    HUERTAS_FIELD_MAP,
  );

   return PaginationUtil.build(
    huertas,
    response.metadata.totalRecords,
    page,
    limit,
    '/api/tci/huertas/list',
    filter
   );
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
