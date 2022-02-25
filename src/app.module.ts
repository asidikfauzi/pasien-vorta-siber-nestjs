import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasienController } from './pasien/pasien.controller';
import { Pasien } from './pasien/pasien.entity';
import { PasienService } from './pasien/pasien.service';


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
    TypeOrmModule.forFeature([Pasien])
  ],
  controllers: [PasienController],
  providers: [PasienService],
})
export class AppModule {}
