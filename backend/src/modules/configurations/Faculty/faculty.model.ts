import { Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/modules/user/users/models/user.model";

@Table({
    tableName:'faculty',
    paranoid:true
})
export class Faculty extends Model{

    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;
    
    @Column
    firstName: string;
  
    @Column
    middleName: string;
  
    @Column
    lastName: string;
  
    @Column
    department: string;
  
    @Column
    designation: string;
  
    @Column
    specialization: string;
  
    @Column
    qualification: string;
  
    @Column(DataType.STRING)
    dateOfQualification: String;
  
    @Column(DataType.STRING)
    dateOfBirth: String;
  
    @Column
    category: string;
  
    @Column
    typeOfAppointment: string;
  
    @Column(DataType.BOOLEAN)
    approvedByInstitute: boolean;
  
    @Column
    approvalNo: string;
  
    @Column(DataType.BOOLEAN)
    ApprovedbyCAS: boolean;
  
    @Column(DataType.STRING)
    dateOfApproval: String;
  
    @Column(DataType.BOOLEAN)
    fromOtherUniversity: boolean;
  
    @Column(DataType.STRING)
    dateofApprovalOfPrevious: String;
  
    @Column
    experience: string;
   
    @ForeignKey(()=>User)
    @Column 
    uid: string;
}