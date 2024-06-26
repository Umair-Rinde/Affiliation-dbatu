import { Column, DataType, Default, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'head-of-institution',
})
export class HeadOfInstitution extends Model {
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
  designation: string;

  @Column
  highestDegree: string;

  @Column
  specialization: string;

  @Column
  dateOfBirth: string;

  @Column
  phoneNumber: string;

  @Column
  approvedByUniversity: boolean;

  @Column
  email: string;

  @Column
  nameOfUniversity: string;

  @Column
  letterOfApproval: boolean;
}
