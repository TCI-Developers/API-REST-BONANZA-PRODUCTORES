import {  Injectable } from "@nestjs/common";
import { QuickBaseRepository } from "src/integrations/quickbase/quickbase.repository";

@Injectable()
export class CorridaRepository {
    constructor(private readonly quickBaseRepositori: QuickBaseRepository) {}

     async getCorridas( query: any){
        return this.quickBaseRepositori.find(query);
     }
}