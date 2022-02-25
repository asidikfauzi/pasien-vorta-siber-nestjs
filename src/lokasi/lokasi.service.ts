import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lokasi } from "./lokasi.entity";

@Injectable()
export class LokasiService 
{
    constructor(@InjectRepository(Lokasi) private readonly lokasiRepository: Repository<Lokasi>){}

    findAll()
    {
        return this.lokasiRepository.find();
    }

    findOne(id: number)
    {
        return this.lokasiRepository.findOneOrFail(id);
    }

}