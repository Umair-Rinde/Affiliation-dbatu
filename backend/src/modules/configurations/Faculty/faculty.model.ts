import { Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/modules/user/users/models/user.model";

@Table({
    tableName:'faculties',
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
  
    @Column(DataType.DATE)
    dateOfQualification: Date;
  
    @Column(DataType.DATE)
    dateOfBirth: Date;
  
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
  
    @Column(DataType.DATE)
    dateOfApproval: Date;
  
    @Column(DataType.BOOLEAN)
    fromOtherUniversity: boolean;
  
    @Column(DataType.DATE)
    dateofApprovalOfPrevious: Date;
  
    @Column
    experience: string;
  
    @ForeignKey(()=>User)
    @Column
    uid: string;
}