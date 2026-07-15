import { LotesDTO } from "../dto/lotes.dto";
import { Injectable } from "@nestjs/common";
import { CorridaAgrupadaDTO } from "src/corridas/dto/corridas-agrupadas.dto";

@Injectable()
export class LotesMapper {

   toResponse(lote: LotesDTO, corridas: CorridaAgrupadaDTO[]) {
    return {
      informacion_general: {
        lote_id: lote.lote_id,
        reco: lote.reco,
        fecha_corte: lote.fecha_corte,
        semana_corte: lote.semana_corte,
        huerta_sagarpa: lote.huerta_sagarpa,
        rfc_productor: lote.rfc_productor,
        rfc_beneficiario: lote.rfc_beneficiario,
        jefe_acopio: lote.jefe_acopio,
        cuadrilla: lote.cuadrilla,
        acarreo: lote.acarreo,
        tipo_de_corte: lote.tipo_de_corte,
        gramaje_de_corte: lote.gramaje_de_corte,
        utilidad_de_lote: lote.utilidad_de_lote,
        porcentaje_rentabilidad: lote.porcentaje_rentabilidad,
        status_utilidad: lote.status_utilidad,
        importe_basura_desecho: lote.importe_basura_desecho,
        kilos_desecho: lote.kilos_desecho,
        kilos_basura: lote.kilos_basura,
      },
      resumen_financiero: {
        kilogramos: lote.kilogramos,
        precio_promedio: lote.precio_promedio,
        importe_bruto: lote.importe_bruto,
        importe_total: lote.importe_total,
      },
      gastos_operativos: {
        gastos_totales: lote.gastos_totales,
      },
      status_pago: {
        estado_pago_tci: lote.estado_pago_tci,
        semana_de_pago: lote.semana_de_pago,
        estado_documentacion: lote.estado_documentacion,
        fecha_modificacion: lote.fecha_modificacion,
      },
      corrida: corridas,
    };
  }
}