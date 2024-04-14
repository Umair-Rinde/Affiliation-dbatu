import { Column, DataType, Default, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'rti',
})
export class RTI extends Model {
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
  totalExperience: string;

  @Column
  qualification: string;

  @Column
  phoneNumber: string;

  @Column
  email: string;
}
