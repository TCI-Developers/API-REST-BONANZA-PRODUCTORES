import { Injectable } from "@nestjs/common";
import { QuickbaseClient } from "./quickbase.client";

@Injectable()
export class QuickBaseRepository {
    constructor(private readonly qb: QuickbaseClient) {}

    async find( query:any){
        return this.qb.query(query.from, query);
    }
}