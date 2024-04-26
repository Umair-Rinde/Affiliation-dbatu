import { Model } from "sequelize";
import { Column, Table } from "sequelize-typescript";

@Table({
    tableName:'faculties',
    paranoid:true
})
export class Faculty extends Model{
    
    @Column
    branch:string

    @Column
    shift :string

    @Column
    first :string

    @Column
    middle:string

    @Column
    last:string

    @Column
    post:string

    @Column
    doj:string

    @Column
    typef:string

    @Column
    isappointed:string

    @Column
    isApproved :string

    @Column
    approvalno :string

    @Column
    doa :string

    @Column
    recognitionno :string

    @Column
    dor:string
}