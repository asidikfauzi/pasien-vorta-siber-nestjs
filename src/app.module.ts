import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LokasiController } from './lokasi/lokasi.controller';
import { Lokasi } from './lokasi/lokasi.entity';
import { LokasiService } from './lokasi/lokasi.service';
import { PasienController } from './pasien/pasien.controller';
import { Pasien } from './pasien/pasien.entity';
import { PasienService } from './pasien/pasien.service';
import { TreatmentController } from './treatment/treatment.controller';
import { Treatment } from './treatment/treatment.entity';
import { TreatmentService } from './treatment/treatment.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username : 'root',
      password : '',
      database : 'nest_test',
      autoLoadEntities : true,
      synchronize : true,
    }),
    TypeOrmModule.forFeature([Pasien, Lokasi, Treatment])
  ],
  controllers: [PasienController, LokasiController, TreatmentController],
  providers: [PasienService, LokasiService, TreatmentService],
})
export class AppModule {}
