import { CorridaDTO } from "./corrida.dto";

export interface CorridaAgrupadaDTO {
  clasificacion: string;
  items: CorridaDTO[];
}