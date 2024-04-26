import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { Faculty } from "./faculty.model";
import { CreateFacultyDto } from "./dto/create-faculty.dto";
import { UpdateFacultyDto } from "./dto/update-faculty.dto";
import { FacultyService } from "./faculty.service";

@Controller('configuration/faculty')
export class FacultyController extends GenericController<Faculty,CreateFacultyDto,UpdateFacultyDto>({createObjDTO:CreateFacultyDto,updateObjDTO:UpdateFacultyDto}){
    constructor(private readonly facultyService : FacultyService){super(facultyService)}
}