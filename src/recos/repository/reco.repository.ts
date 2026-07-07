import { Injectable } from "@nestjs/common";
import { QuickBaseRepository } from '../../integrations/quickbase/quickbase.repository';

@Injectable()

 export class RecosRepository {
    constructor(private readonly quickBaseRepository: QuickBaseRepository) {}

    async getRecos( query: any){
        return this.quickBaseRepository.find(query);
    }
}
