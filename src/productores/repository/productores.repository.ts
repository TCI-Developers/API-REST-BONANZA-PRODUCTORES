import { Injectable } from "@nestjs/common";
import { QuickBaseRepository } from "src/integrations/quickbase/quickbase.repository";

@Injectable()
export class ProductoresRepository {
    
    constructor(private readonly quickBaseRepository: QuickBaseRepository) {}

    async getProductores( query: any){
        return this.quickBaseRepository.find(query);
    }
}