import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user-entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.usersRepository.find();
  }
  getById(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }
  addUser(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, id: number) {
    return this.usersRepository.update(id, updateUserDto);
  }
  delete(id: number) {
    return this.usersRepository.delete(id);
  }
  fintByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
