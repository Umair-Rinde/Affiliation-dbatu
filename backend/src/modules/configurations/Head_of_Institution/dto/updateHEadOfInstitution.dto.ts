import { PartialType } from '@nestjs/mapped-types';
import { HeadOfInstitutionDto } from './createHeadOfInstitution.dto';

export class UpdateHeadOfInstitutionDto extends PartialType(HeadOfInstitutionDto) {}
