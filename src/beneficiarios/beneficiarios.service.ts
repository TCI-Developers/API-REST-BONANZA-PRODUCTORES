import { Injectable } from '@nestjs/common';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { BeneficiariosRepository } from './repository/beneficiario.repository';
import { BeneficiarioFilterDTO } from './dto/beneficiario-filter.dto';
import { QuickbaseWhereBuilder } from 'src/integrations/builders/quickbase-where.builder';
import { BENEFICIARIO_FILTER_MAP } from './mapper/beneficiario-filter.map';
import { QuickbaseQueryBuilder } from '../integrations/builders/quickbase-query.builder';
import { BENEFICIARIO_FIELD_MAP } from './mapper/beneficiario.map';
import { BeneficiarioDTO } from './dto/beneficiario.dto';
import { PaginationUtil } from 'src/shared/pagination/pagination.util';

@Injectable()
export class BeneficiariosService {
  
  private tableId = process.env.QB_TABLE_BENEFICIARIOS;

  constructor(
    private readonly mapper: QuickbaseMapper,
    private readonly beneficiarioRepository: BeneficiariosRepository ){}


  async findAll( filter: BeneficiarioFilterDTO) {
   
    //verificar que venga almenos la primer fecha
    if( filter.fecha_desde && !filter.fecha_hasta){
      filter.fecha_hasta = filter.fecha_hasta;
    }

    const where = new QuickbaseWhereBuilder().build(
      filter,
      BENEFICIARIO_FILTER_MAP
    );

    const query = new QuickbaseQueryBuilder()
      .table(this.tableId!)
      .fields(BENEFICIARIO_FIELD_MAP)
      .where(where)
      .sort(3,'ASC')
      .page(filter.page, filter.limit)
      .build();

    const response = await this.beneficiarioRepository.getBeneficiarios(query);
    
    const beneficiarios = this.mapper.toDomain<BeneficiarioDTO>(
      response,
      BENEFICIARIO_FIELD_MAP
    );

    return PaginationUtil.build(
      beneficiarios,
      response.metadata.totalRecords,
      filter.page,
      filter.limit,
      '/api/tci/beneficiarios/list',
      filter
    );

  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiario`;
  }

}
