import { IsNotEmpty, IsString } from 'class-validator';

export class AffiliationDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  yearOfEstablishment: string;

  @IsString()
  @IsNotEmpty()
  dateOfFirstAffiliation: string;
 
  @IsString()
  @IsNotEmpty()
  detailsOfLastAffiliation: string;
}
