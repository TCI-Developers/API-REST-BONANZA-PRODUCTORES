import { Injectable } from "@nestjs/common";
import { QuickBaseRepository } from '../../integrations/quickbase/quickbase.repository';

@Injectable()
 export class BeneficiariosRepository {
    constructor( private readonly quickBaseRepository: QuickBaseRepository){}

    async getBeneficiarios( query: any ){
        return this.quickBaseRepository.find(query);

    }
 }