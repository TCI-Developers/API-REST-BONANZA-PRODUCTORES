import { metadata } from "reflect-metadata/no-conflict";

export class PaginationUtil {
   
    static build(
        data: any[],
        total: number,
        page: number,
        limit: number,
        endpoint: string,
        query: Record<string, any> = {},
    ) {

      page = Number(page);
      limit = Number(limit);

    const totalPages = Math.ceil(total/ limit);
    const params = new URLSearchParams();


    Object.entries(query).forEach(([key, value]) => {

        if ( value === undefined || value === null || value === '' || key === 'page' || key === 'limit') {
            return;
        }

    params.set(key, String(value));

    });

    params.set('limit', String(limit));

    return {
            metadata: {
                total_registros: total,
                page,
                limit, 
                total_paginas: totalPages,
                next: 
                    page < totalPages
                         ? `${endpoint}?page=${page+1}&${params.toString()}`
                         : null,
                previus:
                    page > 1
                        ? `${endpoint}?page=${page-1}&${params.toString()}`
                        :null   
            },

            data,
         }
        

   }
}