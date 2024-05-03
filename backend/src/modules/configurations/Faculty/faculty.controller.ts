import { Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { Faculty } from "./faculty.model";
import { CreateFacultyDto } from "./dto/create-faculty.dto";
import { UpdateFacultyDto } from "./dto/update-faculty.dto";
import { FacultyService } from "./faculty.service";
@Controller('configurations/faculty')
export class FacultyController extends GenericController<Faculty, CreateFacultyDto, UpdateFacultyDto>({createObjDTO: CreateFacultyDto, updateObjDTO: UpdateFacultyDto}) {
    constructor(private readonly facultyService: FacultyService) { 
        super(facultyService);
    }

    @Post()
    async createFaculties(@Body() requestBody: { staffs: any[], uid: string }): Promise<Faculty[]> {
        //console.log(requestBody.staffs, "===========================>>>>>>>>>>>>>>>>>>.", requestBody.uid)
        try {
            const { staffs, uid } = requestBody;
            // Add uid to each faculty data object
            const staffsWithUid = staffs.map(facultyData => ({ ...facultyData, uid }));
            console.log(staffsWithUid)
            const faculties = await this.facultyService.createFaculties(staffsWithUid);
            return faculties;
        } catch (error) {
            throw new InternalServerErrorException('Error creating faculties');
        }
    }
}
