import { Post } from "@nestjs/common";
import { type } from "os";
import { Treatment } from "src/treatment/treatment.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(()=>Treatment, (treatment:Treatment)=>treatment.pasien, {onUpdate:'CASCADE', onDelete:'CASCADE'})
    treatment: Treatment[];
}