import { Treatment } from "src/treatment/treatment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lokasi 
{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nama : string;

    @OneToMany(type=>Treatment, treatment=>treatment.id)
    treatment: Treatment[];
}