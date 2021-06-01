import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudDto } from './dto/create-stud.dto';
import { Stud } from './stud.entity';

@Injectable()
export class StudService {
  constructor(
    @InjectRepository(Stud, 'test')
    private readonly studsRepository: Repository<Stud>,
  ) {}

  create(createStudDto: CreateStudDto): Promise<Stud> {
    const user = new Stud();
    user.firstName = createStudDto.firstName;
    user.lastName = createStudDto.lastName;

    return this.studsRepository.save(user);
  }

  async findAll(): Promise<Stud[]> {
    return this.studsRepository.find();
  }

  findOne(id: string): Promise<Stud> {
    return this.studsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.studsRepository.delete(id);
  }
}
