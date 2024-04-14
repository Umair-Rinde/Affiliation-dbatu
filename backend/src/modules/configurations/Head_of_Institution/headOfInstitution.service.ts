import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { HeadOfInstitution } from './headOfInstituion.model';
import { HeadOfInstitutionDto } from './dto/createHeadOfInstitution.dto';
import { UpdateHeadOfInstitutionDto } from './dto/updateHEadOfInstitution.dto';

@Injectable()
export class HeadOfInstitutionService extends GenericService<
  HeadOfInstitution,
  HeadOfInstitutionDto,
  UpdateHeadOfInstitutionDto
> ({}){
  constructor(
    @InjectModel(HeadOfInstitution) private headOfInstitution: typeof HeadOfInstitution,
    private reqParams: RequestParamsService,
  ) {
    super(headOfInstitution, reqParams);
  }
}
