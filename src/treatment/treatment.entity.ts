import { Lokasi } from "src/lokasi/lokasi.entity";
import { Pasien } from "src/pasien/pasien.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transform } from 'class-transformer';
import moment from "moment";
import { isString } from "util";
import { isStringObject } from "util/types";

@Entity()
export class Treatment 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama : string;

    @Column()
    waktu : Date;

    
    @ManyToOne(()=>Pasien, (pasien:Pasien)=>pasien.treatment, {onUpdate:'CASCADE', onDelete:'CASCADE'}) 
    @JoinColumn({name: 'pasienId'})
    pasien : string;

    @ManyToOne(()=>Lokasi, (lokasi:Lokasi)=>lokasi.treatment, {onUpdate:'CASCADE', onDelete:'CASCADE'})
    @JoinColumn({name: 'lokasiId'})
    lokasi : number;
}