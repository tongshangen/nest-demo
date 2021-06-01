import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStudDto } from './dto/create-stud.dto';
import { Stud } from './stud.entity';
import { StudService } from './stud.service';

@Controller('stud')
export class StudController {
  constructor(private readonly studService: StudService) {}

  @Post()
  create(@Body() createUserDto: CreateStudDto): Promise<Stud> {
    return this.studService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Stud[]> {
    return this.studService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Stud> {
    return this.studService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studService.remove(id);
  }
}
