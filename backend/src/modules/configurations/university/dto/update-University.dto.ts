import { PartialType } from "@nestjs/mapped-types";
import { CreateUniverssityDto } from "./create-university.dto";

export class UpdateUniversityDto extends PartialType(CreateUniverssityDto){}