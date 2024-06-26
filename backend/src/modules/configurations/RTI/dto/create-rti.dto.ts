import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RTIDto {

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  designation: string;

  @IsString()
  @IsNotEmpty()
  totalExperience: string;

  @IsString()
  @IsNotEmpty()
  qualification: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
