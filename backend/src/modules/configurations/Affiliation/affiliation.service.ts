import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Affiliation } from './affiliation.model';
import { InjectModel } from '@nestjs/sequelize';
import { AffiliationDto } from './dto/create-affiliation.dto';
import { UpdateAffiliationDto } from './dto/update-affiliation.dto';

@Injectable()
export class AffiliationService extends GenericService<Affiliation, AffiliationDto, UpdateAffiliationDto> ({}){
  constructor(
    @InjectModel(Affiliation) private affiliation: typeof Affiliation,
    private reqParams: RequestParamsService,
  ) {
    super(affiliation, reqParams);
  }
}
