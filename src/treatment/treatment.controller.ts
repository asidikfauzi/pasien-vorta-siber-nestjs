import { Controller, UseFilters } from "@nestjs/common";
import { TreatmentService } from "./treatment.service";

@Controller('treatment')
export class TreatmentController
{
    constructor(private readonly treatmentService: TreatmentService){}
}