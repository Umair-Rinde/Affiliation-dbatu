import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class HeadOfInstitutionDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  middleName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  designation: string;

  @IsString()
  @IsNotEmpty()
  highestDegree: string;

  @IsString()
  @IsNotEmpty()
  specialization: string;

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsBoolean()
  @IsNotEmpty()
  approvedByUniversity: boolean;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nameOfUniversity: string;

  @IsBoolean()
  @IsNotEmpty()
  letterOfApproval: boolean;
}
