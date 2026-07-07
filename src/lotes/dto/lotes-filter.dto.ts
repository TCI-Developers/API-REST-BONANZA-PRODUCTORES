import { Type } from "class-transformer";
import { IsBoolean, IsBooleanString, IsIn, IsInt, IsOptional, IsString, Min } from "class-validator";

export class LotesFilterDTO {
  
    @IsOptional()
    @IsString()
    rfc?: string;

    @IsOptional()
    @IsString()
    semana_corte?: string;

    @IsOptional()
    @IsString()
    estado_pago?: string;

    @IsOptional()
    @IsString()
    jefe_acopio?: string;

    @IsOptional()
    @IsString()
    fecha_desde?: string;

    @IsOptional()
    @IsString()
    fecha_hasta?: string;

    @IsOptional()
    @Type( ()=> Number)
    @IsInt()
    @Min(1)
    page= 1;

    @IsOptional()
    @Type(()=> Number)
    @IsInt()
    @Min(1)
    limit = 20;


}