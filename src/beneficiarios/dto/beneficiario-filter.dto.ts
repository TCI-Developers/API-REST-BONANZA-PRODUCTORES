import { Transform, Type } from "class-transformer";
import { IsBoolean, IsInt, IsOptional, IsString, Matches, Min } from "class-validator";

export class BeneficiarioFilterDTO {
    
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    rfc?: string;

    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true')
    activo?: boolean;

    @IsOptional()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'fecha_desde debe tener el formato YYYY-MM-DD',})
    fecha_desde?: string;
       
    @IsOptional()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'fecha_hasta debe tener el formato YYYY-MM-DD',})
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