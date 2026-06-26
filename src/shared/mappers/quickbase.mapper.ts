import { Injectable } from '@nestjs/common';

@Injectable()
export class QuickbaseMapper {
    
  toDomain<T>(
    response: any,
    fieldMap: Record<string, string>,
  ): T[] {
    if (!response?.data) {
      throw new Error('Respuesta inválida de Quickbase');
    }

    return response.data.map((record) => {
      const item: any = {};

      for (const fieldId in fieldMap) {
        const key = fieldMap[fieldId];
        item[key] = record[fieldId]?.value ?? '';
      }

      return item as T;
    });
  }
}