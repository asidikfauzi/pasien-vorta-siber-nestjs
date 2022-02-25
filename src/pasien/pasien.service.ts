import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pasien } from "./pasien.entity";

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
}