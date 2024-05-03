import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsDateString } from "class-validator"
export class CreateFacultyDto{
    @IsString()
    @IsNotEmpty()
    firstName: string;
  
    @IsString()
    @IsNotEmpty()
    middleName: string;
  
    @IsString()
    @IsNotEmpty()
    lastName: string;
  
    @IsString()
    @IsNotEmpty()
    department: string;
  
    @IsString()
    @IsNotEmpty()
    designation: string;
  
    @IsString()
    @IsNotEmpty()
    specialization: string;
  
    @IsString()
    @IsNotEmpty()
    qualification: string;
  
    @IsString()
    @IsNotEmpty()
    dateOfQualification: string;
  
    @IsString()
    @IsNotEmpty()
    dateOfBirth: string;
  
    @IsString()
    @IsNotEmpty()
    category: string;
  
    @IsString()
    @IsNotEmpty()
    typeOfAppointment: string;
  
    @IsBoolean()
    approvedByInstitute: boolean;
  
    @IsString()
    approvalNo: string;
  
    @IsBoolean()
    ApprovedbyCAS: boolean;
  
    @IsString()
    dateOfApproval: string;
  
    @IsBoolean()
    fromOtherUniversity: boolean;
  
    @IsString()
    dateofApprovalOfPrevious: string;
  
    @IsString()
    @IsNotEmpty()
    experience: string;
  
    @IsString()
    @IsNotEmpty()
    uid: string;
    
}
