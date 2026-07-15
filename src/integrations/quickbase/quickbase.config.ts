
export const QUICKBASE_CONFIG = {

    bonanza: {
        
        huertas: {
            tableId: process.env.QUICKBASE_TABLE_HUERTAS,
            fieldMap: {
                '7':    'sagarpa',
                '6':    'nombre_huerta',
                '9':    'municipio',
                '115':  'localidad',
                '94':   'porcentaje_cosecha',
                '93':   'apta_corte',
                '130':  'bloquear_huerta',
                '21':   'altura_nivel_mar',
                '148':  'categoria',
                '10':   'organico',
                '257':  'fecha_ultimo_corte',
                '254':  'rfc_propietario',
                '255':  'nombre_propietario',
                '256':  'fecha_modificacion', 
            },
            filterMap: {
            
                sagarpa: {
                    field: 7,
                    type: 'EX',
                },

                municipio: {
                    field: 9,
                    type: 'CT',
                },

                nombre: {
                    field: 6, 
                    type: 'CT'
                },
                
                apta_corte: {
                    field: 258 ,
                    type: 'EX',
                },

                bloquear: {
                    field: 130, 
                    type: 'EX',
                },
                
                fecha_desde: {
                    field: 260,
                    type: 'GTE',
                },

                fecha_hasta: {
                    field: 260,
                    type: 'LTE',
                },
            }
        },
        recos: {
            tableId: process.env.QUICKBASE_TABLE_RECOS,
            fieldMap: {
                '107' : 'lote_id',
                '108' : 'reco',
                '109' : 'fecha_corte',
                '110' : 'huerta_sagarpa',
                '111' : 'rfc_productor',
                '112' : 'estado_pago_tci'
            },
            filterMap: {
    
                reco: {
                    field: 108,
                    type:'EX',
                }
            },
        },
        lotes: {

            tableId: process.env.QUICKBASE_TABLE_LOTES,
            fieldMap: {
                //informacion general
                '782':  'lote_id',
                '766':  'reco',
                '793':  'fecha_corte',
                '791':  'semana_corte',
                '785':  'huerta_sagarpa',
                '781':  'rfc_productor',
                '815':  'rfc_beneficiario',
                '792':  'jefe_acopio',
                '799':  'cuadrillas',
                '800':  'acarreo',
                '801':  'tipo_corte',
                '802':  'gramaje_de_corte',
                '807':  'utilidad_de_lote',
                '808':  'porcentaje_rentabilidad',
                '809':  'status_utilidad',
                '810':  'importe_basura_desecho',
                '811':  'kilos_desecho',
                '812':  'kilos_basura',    
                // Resumen financiero
                '784':  'kilogramos',
                '803':  'precio_promedio',
                '804':  'importe_bruto',
                '805':  'importe_total',
                // Gastos operativos
                '806':   'gastos_totales',
                //Status de pago
                '786':  'estado_pago_tci',
                '814':  'semana_de_pago',
                '794':  'estado_documentacion',
                '795':  'fecha_modificacion',
            },
            filterMap: {

                loteId: {
                    field: 782,
                    type: 'EX',
                },
                rfc: {
                    field: 781,
                    type: 'EX',
                },

                semana_corte: {
                    field: 791, 
                    type: 'CT',
                },

                estado_pago: {
                    field: 786,
                    type: 'EX',
                },

                jefe_acopio: {
                    field: 792,
                    type: 'CT',
                },

                fecha_desde: {
                    field: 324,
                    type: 'GTE',
                },

                fecha_hasta: {
                    field: 324,
                    type: 'LTE',
                },
            }
        },
        corridas: {
            tableId: process.env.QB_TABLE_CORRIDAS,
            fieldMap: {
                '6'  : 'lote_id',
                '17':  'clasificacion',
                '40' : 'categoria',
                '41' : 'kilogramos',
                '42' : 'porcentaje',
                '43' : 'precio_unitario',
                '44' : 'importe',
                '45' : 'fecha_corrida'
            },
            filterMap:{},
        },
        productores: {

            tableId: process.env.QUICKBASE_TABLE_PRODUCTORES,
            fielMap: {
                '71':  'rfc',
                '72':  'nombre',
                '80':  'municipio',
                '81':  'certificado',
                '82':  'origen',
                '73':  'correo',
                '74':  'telefono',
                '75':  'sagarpa_asociado',
                '76':  'activo',
                '83':  'fecha_modificacion'
            },
            filterMap: {

                rfc: {
                    field: 71,
                    type: 'EX',
                },

                nombre: {
                    field: 72,
                    type: 'CT',
                },

                municipio: {
                    field: 80,
                    type: 'EX',
                },

                fecha_desde: {
                    field: 79,
                    type: 'GTE',
                },

                fecha_hasta: {
                    field: 79,
                    type: 'LTE',
                },

                activo: {
                    field: 76,
                    type: 'EX',
                },

            },

        },
        beneficiarios: {

            tableId: process.env.QB_TABLE_BENEFICIARIOS,
            fieldMap: {
                '3':    'id_beneficiario',
                '6':    'clave',
                '7':    'nombre',
                '30':   'rfc',
                '44':   'telefono',
                '45':   'correo',
                '46':   'direccion',
                '43':   'tipo',
                '48':   'activo',
                '47':   'fecha_modificacion',
            },
            filterMap: {

                nombre:{
                    field:  7,
                    type:   'CT',
                 },

                rfc:{
                    field:  30,
                    type:   'EX',
                },

                activo: {
                    field: 48,
                    type:   'EX',       
                },

                fecha_desde: {
                    field: 49,
                    type: 'GTE',
                },

                fecha_hasta: {
                    field: 49,
                    type: 'LTE',
                },
            }
        },        
    }
}