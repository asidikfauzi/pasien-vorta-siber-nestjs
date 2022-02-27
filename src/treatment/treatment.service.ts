import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Treatment } from "./treatment.entity";

@Injectable()
export class TreatmentService 
{
    constructor(@InjectRepository(Treatment) private readonly treatmentRepository: Repository<Treatment>){}

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

    getPasienById(id: string)
    {
        return this.treatmentRepository.findOne(id, {
            relations: ['pasien']
        });
    }

}