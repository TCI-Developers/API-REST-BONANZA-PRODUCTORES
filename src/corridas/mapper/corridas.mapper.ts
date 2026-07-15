import { CorridaDTO } from "../dto/corrida.dto";

export class CorridasMapper {
  
  static agruparPorClasificacion(corridas: CorridaDTO[]) {
    
    return corridas.reduce((acc, corrida) => {
      let grupo = acc.find(
        g => g.clasificacion === corrida.clasificacion,
      );

      if (!grupo) {
        grupo = {
          clasificacion: corrida.clasificacion,
          items: [],
        };

        acc.push(grupo);
      }

      grupo.items.push({
        categoria: corrida.categoria,
        kilogramos: corrida.kilogramos,
        porcentaje: corrida.porcentaje,
        precio_unitario: corrida.precio_unitario,
        importe: corrida.importe,
        fecha_corrida: corrida.fecha_corrida,
      });

      return acc;
    }, [] as any[]);
  }
}