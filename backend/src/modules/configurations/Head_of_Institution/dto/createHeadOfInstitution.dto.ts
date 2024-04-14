import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class HeadOfInstitutionDto {
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
