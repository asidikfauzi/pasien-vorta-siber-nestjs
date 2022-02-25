import { Controller, Get, Param } from "@nestjs/common";
import { LokasiService } from "./lokasi.service";

@Controller('lokasi')
export class LokasiController
{
    constructor(private readonly lokasiService: LokasiService)
    {

    }
    
    @Get()
    async findAll() {
        return {
            data: await this.lokasiService.findAll()
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: number){
        return {
            data: await this.lokasiService.findOne(id)
        };
    }
}