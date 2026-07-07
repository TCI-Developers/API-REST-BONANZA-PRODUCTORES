export const BENEFICIARIO_FILTER_MAP = {
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