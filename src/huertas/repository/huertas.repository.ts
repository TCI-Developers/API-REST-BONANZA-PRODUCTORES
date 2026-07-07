import { Injectable } from "@nestjs/common";
import { QuickBaseRepository } from "src/integrations/quickbase/quickbase.repository";

@Injectable()
export class HuertasRepository {

    constructor( private readonly quickBaseRepository: QuickBaseRepository) {}

    async getHuertas( query: any){
        return this.quickBaseRepository.find(query);
    }
}