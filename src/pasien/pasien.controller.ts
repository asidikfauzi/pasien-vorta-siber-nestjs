import { Body, Controller, Get, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreatePasienDto } from "./create-pasien.dto";
import { EntityNotFoundExceptionFilter } from "./entity-not-found-exception.filter";
import { PasienService } from "./pasien.service";

@Controller('pasien')
@UseFilters(new EntityNotFoundExceptionFilter)
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

    @Post()
    async create(@Body() data: CreatePasienDto) {
        return {
            data: await this.pasienService.create(data)
        };
    }

    @Put(':id')
    async update(@Body() data: CreatePasienDto, @Param('id') id: string) {
        return {
                data: await this.pasienService.update(data, id)
        };
    }
}