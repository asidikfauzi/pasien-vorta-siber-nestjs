import { type } from "os";
import { Treatment } from "src/treatment/treatment.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pasien 
{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nama : string;

    @Column()
    notelp : string;

    @Column()
    asuransi : string;

    @Column({ default : true })
    isActive : boolean;

    @OneToMany(type=>Treatment, treatment=>treatment.id)
    treatment: Treatment[];
}