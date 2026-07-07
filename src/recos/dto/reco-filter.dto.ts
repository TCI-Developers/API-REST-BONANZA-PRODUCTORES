import { IsDefined, IsNotEmpty, isString, IsString } from "class-validator";

export class RecoFilterDTO {

    @IsString()
    sagarpa!: string;

    
 }