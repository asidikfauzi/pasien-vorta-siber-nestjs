import { Controller, Get, Param, UseFilters } from "@nestjs/common";
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
    async getPasienById(@Param('id') id: string): Promise<any>{
        return this.treatmentService.getPasienById(id);
    }

   
}