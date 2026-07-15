import { BadRequestException, Injectable } from '@nestjs/common';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { LOTES_FIELD_MAP } from './mapper/lotes.map';
import { LotesDTO } from './dto/lotes.dto';
import { QuickbaseWhereBuilder } from 'src/integrations/builders/quickbase-where.builder';
import { QuickbaseQueryBuilder } from 'src/integrations/builders/quickbase-query.builder';
import { LotesRepository } from './repository/lotes.repository';
import { PaginationUtil } from 'src/shared/pagination/pagination.util';
import { RelationUtil } from 'src/shared/utils/relation.util';
import { LOTES_FILTER_MAP } from './mapper/lotes-filter.map';
import { LotesFilterDTO } from './dto/lotes-filter.dto';
import { CorridasService } from 'src/corridas/corridas.service';
import { isEmpty } from 'class-validator';
import { LotesMapper } from './mapper/lotes.mapper';
import { CorridasMapper } from 'src/corridas/mapper/corridas.mapper';


@Injectable()
export class LotesService {

  private tableId = process.env.QUICKBASE_TABLE_LOTES;

  constructor(
    private readonly mapper : QuickbaseMapper,
    private readonly corridasService : CorridasService,
    private readonly lotesRepository: LotesRepository,
    private readonly lotesMapper: LotesMapper,
  ){}

  async findOne(loteId: string){

    if (isEmpty(loteId)) {
      throw new BadRequestException(' El parametro "no_lote" es obligatorio');
    }

    const where = new QuickbaseWhereBuilder().build({ loteId }, LOTES_FILTER_MAP );

    const query = new QuickbaseQueryBuilder()
      .table(this.tableId!)
      .fields(LOTES_FIELD_MAP)
      .where(where)
      .build();

    const response = await this.lotesRepository.getLotes(query);

    const lotes = this.mapper.toDomain<LotesDTO>(
      response,
      LOTES_FIELD_MAP
    );

    const ids = lotes.map(x => Number(x.lote_id));
    const corridas = await this.corridasService.findByLotesIds(ids);

    const mapaCorridas = RelationUtil.groupBy(
      corridas,
      'lote_id'
    );

    const resultado = lotes.map(lote => {

       const corridas = mapaCorridas.get(Number(lote.lote_id)) ?? [];
       const corridasAgrupadas = CorridasMapper.agruparPorClasificacion(corridas);

       return this.lotesMapper.toResponse(
        lote,
        corridasAgrupadas
       )
      });

    return resultado;
  }

  async findAll(filter: LotesFilterDTO) {

    //Verificar que vengan ambas fechas o almenos la fecha inicial
    if (filter.fecha_desde && !filter.fecha_hasta) {
        filter.fecha_desde = filter.fecha_desde;
    }

  const where = new QuickbaseWhereBuilder().build(
    filter ,
    LOTES_FILTER_MAP
  );


  const query = new QuickbaseQueryBuilder()
    .table(this.tableId!)
    .fields(LOTES_FIELD_MAP)
    .where(where)
    .sort(6,'ASC')
    .page(filter.page, filter.limit)
    .build();

  const response = await this.lotesRepository.getLotes(query);

  const lotes = this.mapper.toDomain<LotesDTO>(
      response,
      LOTES_FIELD_MAP
    );


  const ids = lotes.map(x => Number(x.lote_id));
  const corridas = await this.corridasService.findByLotesIds(ids);

  const mapaCorridas = RelationUtil.groupBy(
      corridas,
      'lote_id'
    );

  const resultado = lotes.map(lote => {

    const corridas = mapaCorridas.get(Number(lote.lote_id)) ?? [];
    const corridasAgrupadas = CorridasMapper.agruparPorClasificacion(corridas);
      
    return this.lotesMapper.toResponse(
      lote,
      corridasAgrupadas
      )
    });


  return PaginationUtil.build(
      resultado,
      response.metadata.totalRecords,
      filter.page,
      filter.limit,
      '/api/tci/lotes/list',
      filter
    ); 
  }
}
