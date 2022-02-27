import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Treatment } from "./treatment.entity";

@Injectable()
export class TreatmentService 
{
    constructor(@InjectRepository(Treatment) private readonly treatmentRepository: Repository<Treatment>){}
}