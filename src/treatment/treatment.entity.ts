import { Lokasi } from "src/lokasi/lokasi.entity";
import { Pasien } from "src/pasien/pasien.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Treatment 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama : string;

    @Column()
    waktu : Date;

    @ManyToOne(type=> Pasien, pasien => pasien.id, {onDelete: 'SET NULL'}) 
    @JoinColumn({name: 'pasienId'})
    pasien : Pasien;

    @ManyToOne(type=> Lokasi, lokasi => lokasi.id, {onDelete: 'SET NULL'})
    @JoinColumn({name: 'lokasiId'})
    lokasi : number;
}