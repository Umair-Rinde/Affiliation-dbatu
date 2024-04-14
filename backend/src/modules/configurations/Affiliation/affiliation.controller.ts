import { Controller } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Affiliation } from './affiliation.model';
import { AffiliationService } from './affiliation.service';
import { AffiliationDto } from './dto/create-affiliation.dto';
import { UpdateAffiliationDto } from './dto/update-affiliation.dto';

@Controller('configurations/affiliation')
export class AffiliationController extends GenericController<
  Affiliation,
  AffiliationDto,
  UpdateAffiliationDto
>({ createObjDTO: AffiliationDto, updateObjDTO: UpdateAffiliationDto }) {
  constructor(private readonly affiliationService: AffiliationService) {
    super(affiliationService);
  }
}
