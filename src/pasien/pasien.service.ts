import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePasienDto } from "./create-pasien.dto";
import { Pasien } from "./pasien.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PasienService 
{
    constructor(@InjectRepository(Pasien) private readonly pasienRepository: Repository<Pasien>){}

    findAll()
    {
        return this.pasienRepository.find();
    }

    findOne(id: string)
    {
        return this.pasienRepository.findOneOrFail(id);
    }

    create(data: CreatePasienDto){
        const pasien = new Pasien();
        pasien.id = uuidv4();
        pasien.nama = data.nama;
        pasien.notelp = data.notelp;
        pasien.asuransi = data.asuransi;
        pasien.isActive = data.isActive;
        
        return this.pasienRepository.save(pasien);
    }
}