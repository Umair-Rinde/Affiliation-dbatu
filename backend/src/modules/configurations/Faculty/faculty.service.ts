import { GenericService, RequestParamsService } from "src/core/modules";
import { Faculty } from "./faculty.model";
import { CreateFacultyDto } from "./dto/create-faculty.dto";
import { UpdateFacultyDto } from "./dto/update-faculty.dto";
import { InjectModel } from "@nestjs/sequelize";

export class FacultyService extends GenericService<Faculty,CreateFacultyDto,UpdateFacultyDto>({}){
    constructor(
        @InjectModel(Faculty) private faculty :typeof Faculty,
        private reqparams : RequestParamsService
    ){super(faculty,reqparams)}

}