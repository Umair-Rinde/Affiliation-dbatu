import { Controller } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { HeadOfInstitutionDto } from './dto/createHeadOfInstitution.dto';
import { UpdateHeadOfInstitutionDto } from './dto/updateHEadOfInstitution.dto';
import { HeadOfInstitution } from './headOfInstituion.model';
import { HeadOfInstitutionService } from './headOfInstitution.service';

@Controller('configurations/head-of-institution')
export class HeadOfInstitutionController extends GenericController<
  HeadOfInstitution,
  HeadOfInstitutionDto,
  UpdateHeadOfInstitutionDto
>({ createObjDTO: HeadOfInstitutionDto, updateObjDTO: UpdateHeadOfInstitutionDto }) {
  constructor(private readonly headOfInstitutionService: HeadOfInstitutionService) {
    super(headOfInstitutionService);
  }
}
