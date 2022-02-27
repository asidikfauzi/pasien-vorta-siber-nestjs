import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePasienDto } from "src/pasien/create-pasien.dto";
import { Pasien } from "src/pasien/pasien.entity";
import { Repository } from "typeorm";
import { Treatment } from "./treatment.entity";
import { v4 as uuidv4 } from 'uuid';
import { CreateTreatmentDto } from "./create-treatment.dto";
import { Lokasi } from "src/lokasi/lokasi.entity";

@Injectable()
export class TreatmentService 
{
    constructor(@InjectRepository(Treatment) private readonly treatmentRepository: Repository<Treatment>, 
    @InjectRepository(Pasien) private readonly pasienRepository: Repository<Pasien>){}

    findAll()
    {
        return this.treatmentRepository
                .createQueryBuilder('treatment')
                .leftJoinAndSelect('treatment.pasien', 'pasien')
                .leftJoinAndSelect('treatment.lokasi', 'lokasi')
                .getMany();
    }

    findOne(id: number)
    {
        return this.treatmentRepository.findOneOrFail(id);
    }

    getPasienById(id: number)
    {
        return this.treatmentRepository.findOne(id, {
            relations: ['pasien', 'lokasi']
        });
    }


    updateTreatment(id:number, treatment:CreateTreatmentDto)
    {
        
        const updatedTreatment = this.treatmentRepository.findOne(id,{
            relations: ['pasien', 'lokasi'], 
        });
        if(updatedTreatment)
        {
            return {
                data : this.treatmentRepository.update(id, treatment),
                message : "Berhasil Ubah Jadwal Appointment " + treatment.nama
            }
        }
    }
}