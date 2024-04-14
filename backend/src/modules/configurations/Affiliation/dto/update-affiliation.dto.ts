import { PartialType } from '@nestjs/mapped-types';
import { AffiliationDto } from './create-affiliation.dto';

export class UpdateAffiliationDto extends PartialType(AffiliationDto) {}
