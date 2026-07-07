export interface LotesDTO {
    
    lote_id: string;
    reco: string;
    fecha_corte: string;
    semana_corte: string;
    nombre_huerta: string;
    huerta_sagarpa: string;
    productor_nombre: string;
    rfc_productor: string;
    jefe_acopio: string;
    kilogramos: number;
    importe_total: number;
    gastos_totales: number;
    estado_pago_tci: string;
    estado_documentacion: string;
    appel_aplicado: boolean;
    cobrar_productor: boolean;
    fecha_moodificacion: string;

}