import { IsString, IsNotEmpty } from "class-validator"

export class CreateFacultyDto{
    
    @IsString()
    @IsNotEmpty()
    branch:string

    @IsString()
    @IsNotEmpty()
    shift :string

    @IsString()
    @IsNotEmpty()
    first :string

    @IsString()
    @IsNotEmpty()
    middle:string

    @IsString()
    @IsNotEmpty()
    last:string

    @IsString()
    @IsNotEmpty()
    post:string

    @IsString()
    @IsNotEmpty()
    doj:string

    @IsString()
    @IsNotEmpty()
    typef:string

    @IsString()
    @IsNotEmpty()
    isappointed:string

    @IsString()
    @IsNotEmpty()
    isApproved :string

    @IsString()
    @IsNotEmpty()
    approvalno :string

    @IsString()
    @IsNotEmpty()
    doa :string

    @IsString()
    @IsNotEmpty()
    recognitionno :string

    @IsString()
    @IsNotEmpty()
    dor:string
}