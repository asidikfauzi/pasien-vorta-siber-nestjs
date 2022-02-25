import { Controller, Get } from "@nestjs/common";
import { PasienService } from "./pasien.service";

@Controller('pasien')
export class PasienController
{
    constructor(private readonly pasienService: PasienService)
    {

    }
    
    @Get()
    findAll() {
        return this.pasienService.findAll();
    }
}