import { Controller } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { University } from './university.model';
import { CreateUniverssityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-University.dto';
import { UniversityService } from './university.service';

@Controller('configurations/university')
export class UniversityController extends GenericController<
  University,
  CreateUniverssityDto,
  UpdateUniversityDto
>({ createObjDTO: CreateUniverssityDto, updateObjDTO: UpdateUniversityDto }) {
  constructor(private readonly universityService:UniversityService) {
    super(universityService);
  }
}
