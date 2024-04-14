import { PartialType } from '@nestjs/mapped-types';
import { RTIDto } from './create-rti.dto';

export class UpdateRTIDto extends PartialType(RTIDto) {}
