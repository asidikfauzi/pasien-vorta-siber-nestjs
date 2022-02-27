import { Treatment } from "src/treatment/treatment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lokasi 
{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nama : string;

    @OneToMany(()=>Treatment, (treatment:Treatment)=>treatment.pasien, {onUpdate:'CASCADE', onDelete:'CASCADE'})
    treatment: Treatment[];
}