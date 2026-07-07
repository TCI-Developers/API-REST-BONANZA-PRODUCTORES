import { Type } from 'class-transformer';
export class QuickbaseWhereBuilder {
    
    build( filters: Record<string, any>, map: Record<string, any>): string {

    const conditions: string[] = [];

    for (const key of Object.keys(filters)) {

      const value = filters[key];

      if (
        value === undefined ||
        value === null ||
        value === ''
      ) {
        continue;
      }

      if (key === 'page' || key === 'limit') {
        continue;
      }

      const config = map[key];

      if (!config) {
        continue;
      }
      const operador = config.type.toUpperCase();

      conditions.push(
        `{${config.field}.${operador}.'${value}'}`
      );

    }

    return conditions.join('AND');

  }


   /* private filter:string[] = [];
    
    //EJEMPLO (123.EX.34) EJEMPLO
    eq(field:number,value:any){
        if (value) {
            this.filter.push(`{${field}.EX.'${value}'}`);
        }
        return this;
    }

    gte(field:number, value:any){
        if (value) {
            this.filter.push(`{${field}.GTE.'${value}'}`);
        }
        return this;
    }

    lte(field:number, value:any){
        if (value) {
            this.filter.push(`{${field}.LTE.'${value}'}`);
        }
        return this;
    }

    build(){
        return this.filter.join("AND")
    }
    
   */
}