import { Controller } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { RTI } from './rti.model';
import { RTIService } from './rti.service';
import { RTIDto } from './dto/create-rti.dto';
import { UpdateRTIDto } from './dto/update-rti.dto';

@Controller('configurations/rti')
export class RTIController extends GenericController<
  RTI,
  RTIDto,
  UpdateRTIDto
>({ createObjDTO: RTIDto, updateObjDTO: UpdateRTIDto }) {
  constructor(private readonly rtiService: RTIService) {
    super(rtiService);
  }
}
