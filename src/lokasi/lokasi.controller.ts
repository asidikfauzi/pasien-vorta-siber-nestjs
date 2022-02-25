import { Controller, Get } from "@nestjs/common";
import { LokasiService } from "./lokasi.service";

@Controller('lokasi')
export class LokasiController
{
    constructor(private readonly lokasiService: LokasiService)
    {

    }
    
    @Get()
    findAll() {
        return this.lokasiService.findAll();
    }
}