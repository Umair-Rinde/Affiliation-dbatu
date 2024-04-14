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
}
