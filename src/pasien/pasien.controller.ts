import { Controller, Get, Param } from "@nestjs/common";
import { PasienService } from "./pasien.service";

@Controller('pasien')
export class PasienController
{
    constructor(private readonly pasienService: PasienService){}
    
    @Get()
    async findAll() {
        return {
            data: await this.pasienService.findAll()
        };
        
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return {
            data: await this.pasienService.findOne(id)
        };
    }
}