import { Body, Controller, Get, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreatePasienDto } from "src/pasien/create-pasien.dto";
import { CreateTreatmentDto } from "./create-treatment.dto";
import { Treatment } from "./treatment.entity";
import { TreatmentService } from "./treatment.service";

@Controller('treatment')
export class TreatmentController
{
    constructor(private readonly treatmentService: TreatmentService){}

    @Get()
    async findAll() {
        return {
            data: await this.treatmentService.findAll()
        };
        
    }

    @Get(':id')
    async getPasienById(@Param('id') id: number): Promise<any>{
        return {
            data : await this.treatmentService.getPasienById(id)
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: CreateTreatmentDto) {
        return {
                data: await this.treatmentService.updateTreatment(id, data)
        };
    }


   
}