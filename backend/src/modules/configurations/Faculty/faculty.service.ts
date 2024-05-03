import { GenericService, RequestParamsService } from "src/core/modules";
import { Faculty } from "./faculty.model";
import { CreateFacultyDto } from "./dto/create-faculty.dto";
import { UpdateFacultyDto } from "./dto/update-faculty.dto";
import { InjectModel } from "@nestjs/sequelize";

export class FacultyService extends GenericService<Faculty, CreateFacultyDto, UpdateFacultyDto>({ }) {
    constructor(
        @InjectModel(Faculty) private faculty: typeof Faculty,
        private reqparams: RequestParamsService
    ) {
        super(faculty, reqparams);
    }
    async createFaculties(facultyDataArray: any[]): Promise<Faculty[]> {
        try {
          console.log('Received faculty data for bulk creation:', facultyDataArray);
          const faculties = await this.faculty.bulkCreate(facultyDataArray);
          console.log('Faculties created successfully:', faculties);
          return faculties;
        } catch (error) {
          console.error('Error creating faculties:', error);
          throw new Error('Error creating faculties');
        }
      }
} 