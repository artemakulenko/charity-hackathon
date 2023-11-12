import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(nickname: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ nickname: nickname });
  }

  async create(dto: CreateUserDto) {
    const { nickname, passwordHash } = dto;

    const user = new User();
    user.nickname = nickname;
    user.passwordHash = passwordHash;

    return this.usersRepository.save(user);
  }
}
