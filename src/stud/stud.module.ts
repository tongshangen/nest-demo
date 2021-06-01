import { Module } from '@nestjs/common';
import { StudController } from './stud.controller';
import { StudService } from './stud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stud } from './stud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stud], 'test')],
  controllers: [StudController],
  providers: [StudService],
})
export class StudModule {}
