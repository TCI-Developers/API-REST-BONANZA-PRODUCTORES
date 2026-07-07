import { skip } from "node:test";

export class QuickbaseQueryBuilder {

    private body:any = {};
    
    table(id:string){
        this.body.from=id;
        return this;
    }

    fields(map:any){
        this.body.select=Object.keys(map).map(Number);
        return this;

    }

    where(where:string){
        this.body.where=where;
        return this;
    }
    
    page(page:number, limit:number){
        this.body.options={
            skip:(Number(page) -1) * Number(limit),
            top:Number(limit)
        };
        return this;
    }

    sort(fieldId:number, order:'ASC'|'DESC'){
        this.body.sortBy=[{
            fieldId,
            order
        }];

        return this;
    }

    build(){
        return this.body;
    }
}