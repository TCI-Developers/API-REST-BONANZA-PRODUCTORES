export class LotesDTO {
    
    //Informacion General
    lote_id!: string;
    reco!: string;
    fecha_corte!: string;
    semana_corte!: string;
    huerta_sagarpa!: string;
    rfc_productor!: string;
    rfc_beneficiario!: string;
    jefe_acopio!: string;
    cuadrilla!: string;
    acarreo!: string;
    tipo_de_corte!: string;
    gramaje_de_corte!: string;
    utilidad_de_lote!: number;
    porcentaje_rentabilidad!: number;
    status_utilidad!: string;
    importe_basura_desecho!: number;
    kilos_desecho!: number;
    kilos_basura!: number;
    //Resumen Financiaro
    kilogramos!: number;
    precio_promedio!: number;
    importe_bruto!: number;
    importe_total!: number;
    //Gastos Operativos
    gastos_totales!: number;
    //Status de Pago
    estado_pago_tci!: string;
    semana_de_pago!: string;
    estado_documentacion!: string;
    fecha_modificacion!: string;

}