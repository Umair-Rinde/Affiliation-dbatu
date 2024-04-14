import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { RTI } from './rti.model';
import { InjectModel } from '@nestjs/sequelize';
import { RTIDto } from './dto/create-rti.dto';
import { UpdateRTIDto } from './dto/update-rti.dto';

@Injectable()
export class RTIService extends GenericService<RTI, RTIDto, UpdateRTIDto> ({}){
  constructor(
    @InjectModel(RTI) private rti: typeof RTI,
    private reqParams: RequestParamsService,
  ) {
    super(rti, reqParams);
  }
}
