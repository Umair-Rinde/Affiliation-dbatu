import { Column, DataType, Default, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName:'universities',
    paranoid:true
})
export class University extends Model{

    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;
  
    @Column
    name:string
    
    @Column
    address:string
    @Column
    taluka:string
    @Column
    district : string
    
    @Column
    pin:string

    @Column
    phone:string

    @Column
    fax:string

    @Column
    unicode:string

    @Column
    aicte:string

    @Column
    dte:string
}