import { IsNotEmpty, IsString } from "class-validator"

export class CreateUniverssityDto {
    @IsString()
    @IsNotEmpty()
    name:string
    
    @IsString()
    @IsNotEmpty()
    address:string
    
    @IsString()
    @IsNotEmpty()
    taluka:string

    @IsString()
    @IsNotEmpty()
    district : string
    
    @IsString()
    @IsNotEmpty()
    pin:string

    @IsString()
    @IsNotEmpty()
    phone:string

    @IsString()
    @IsNotEmpty()
    fax:string

    @IsString()
    @IsNotEmpty()
    unicode:string

    @IsString()
    @IsNotEmpty()
    aicte:string

    @IsString()
    @IsNotEmpty()
    dte:string
}