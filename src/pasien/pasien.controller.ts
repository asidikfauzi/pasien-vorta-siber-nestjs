import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters } from "@nestjs/common";
import { CreatePasienDto } from "./create-pasien.dto";
import { EntityNotFoundExceptionFilter } from "./entity-not-found-exception.filter";
import { PasienService } from "./pasien.service";
import { Crud } from '@nestjsx/crud';
import { Pasien } from "./pasien.entity";
import { Observable } from "rxjs";
import { Pagination } from "nestjs-typeorm-paginate";

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
    index(@Query('page') page: number = 1, @Query('limit') limit: number = 7): Observable<Pagination<Pasien>> {
        limit = limit > 100 ? 100 : limit;
        return  this.pasienService.paginate({page: Number(page), limit: Number(limit), route: 'http://localhost:3000/pasien'});
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return {
            data: await this.pasienService.findOne(id),
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
                data: await this.pasienService.update(data, id),
                message: 'berhasil mengubah pasien'
        };
    }

    @Put('nonaktif/:id')
    async nonaktiv(@Body() data: CreatePasienDto, @Param('id') id: string) {
        return {
                data: await this.pasienService.nonaktive(data, id),
                message: 'berhasil menonaktifkan pasien'
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