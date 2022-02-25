import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
}