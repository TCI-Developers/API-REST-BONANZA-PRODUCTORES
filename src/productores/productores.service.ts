import { Injectable, NotFoundException } from '@nestjs/common';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { PRODUCTOR_FIELD_MAP } from './mappers/productor.map';
import { ProductorDTO } from './dto/productor.dto';
import { PaginationUtil } from 'src/shared/pagination/pagination.util';
import { QuickbaseWhereBuilder } from 'src/integrations/builders/quickbase-where.builder';
import { QuickbaseQueryBuilder } from 'src/integrations/builders/quickbase-query.builder';
import { ProductoresRepository } from './repository/productores.repository';
import { PRODUCTORES_FILTER_MAP } from './mappers/productores-filter.map';
import { ProductorFilterDTO } from './dto/productores-filter.dto';

@Injectable()
export class ProductoresService {
  
  private tableId = process.env.QUICKBASE_TABLE_PRODUCTORES;

  constructor(  
    private readonly mapper: QuickbaseMapper,
    private readonly productorRepository: ProductoresRepository){}

  async findOne( rfc: string) {

  
  const where = new QuickbaseWhereBuilder().build({ rfc },PRODUCTORES_FILTER_MAP,);
    
  const query = new QuickbaseQueryBuilder()
    .table(this.tableId!)
    .fields(PRODUCTOR_FIELD_MAP)
    .where(where)
    .sort(3,'ASC')
    .page(1,20)
    .build();

  const response = await this.productorRepository.getProductores(query);

  const productores = this.mapper.toDomain<ProductorDTO>(
      response,
      PRODUCTOR_FIELD_MAP
    );

  if (!productores.length) {
      throw new NotFoundException(
          `Rfc No Existe: ${rfc}`,
      );
    }

   return productores; 
    }

  async findAll( filter: ProductorFilterDTO) {
    
   //Verificar que vengan ambas fechas o almenos la fecha inicial
    if (filter.fecha_desde && !filter.fecha_hasta) {
        filter.fecha_hasta = filter.fecha_desde;
    }
    
    const where = new QuickbaseWhereBuilder().build(
      filter,
      PRODUCTORES_FILTER_MAP
    );

    const query = new QuickbaseQueryBuilder()
      .table(this.tableId!)
      .fields(PRODUCTOR_FIELD_MAP)
      .where(where)
      .sort(3,'ASC')
      .page(filter.page,filter.limit)
      .build();


    const response = await this.productorRepository.getProductores(query);
    
    const productores = this.mapper.toDomain<ProductorDTO>(
          response,
          PRODUCTOR_FIELD_MAP,
        );
  
         return PaginationUtil.build(
         productores,
          response.metadata.totalRecords,
          filter.page,
          filter.limit,
          '/api/tci/productores/list',
          filter
          
         );
  }

  
  
}
