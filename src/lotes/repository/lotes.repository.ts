import { Injectable } from '@nestjs/common';
import { QuickBaseRepository } from "src/integrations/quickbase/quickbase.repository";

@Injectable()
export class LotesRepository {
    
    constructor(private readonly quickBaseRepository: QuickBaseRepository) {}


    async getLotes(query:any){
        return this.quickBaseRepository.find(query);
    }
}