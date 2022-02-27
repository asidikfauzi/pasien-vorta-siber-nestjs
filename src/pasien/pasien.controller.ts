import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreatePasienDto } from "./create-pasien.dto";
import { EntityNotFoundExceptionFilter } from "./entity-not-found-exception.filter";
import { PasienService } from "./pasien.service";
import { Crud } from '@nestjsx/crud';
import { Pasien } from "./pasien.entity";

@Crud({
    model: {
        type: Pasien,
    },
    query: {
        limit:6,
        alwaysPaginate: true,
        join: {
            treatment: {
                eager: true,
            },
        }
    }
})

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

    @Delete(':id')
    async remove(@Param('id') id: string){
        await this.pasienService.delete(id)
        return{
            message : "data berhasil di hapus"
        }
    }
}