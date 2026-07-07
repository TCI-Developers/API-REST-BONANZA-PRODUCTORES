export class RelationUtil {

   static groupBy<T ,K extends keyof T>( items: T[], key: K): Map<T[K], T[]>{

    const map = new Map<T[K], T[]>();

    for(const item of items){
        const value = item[key];
        if (!map.has(value)) {
            map.set(value, []);
        }

        map.get(value)!.push(item);
    }

    return map;
   }
}