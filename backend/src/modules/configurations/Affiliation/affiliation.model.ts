import { Column, DataType, Default, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'affiliation',
})
export class Affiliation extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  yearOfEstablishment: string;

  @Column
  dateOfFirstAffiliation: string;

  @Column
  detailsOfLastAffiliation: string;
}
