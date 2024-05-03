import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { University } from './university.model';
import { CreateUniverssityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-University.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UniversityService extends GenericService<University, CreateUniverssityDto, UpdateUniversityDto> ({}){
  constructor(
    @InjectModel(University) private university: typeof University,
    private reqParams: RequestParamsService,
  ) {
    super(university, reqParams);
  }
}
