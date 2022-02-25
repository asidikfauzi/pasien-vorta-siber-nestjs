import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lokasi 
{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nama : string;
}