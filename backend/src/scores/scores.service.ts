import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './entities/score.entity.js';
import { User } from '../users/entities/user.entity.js';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoresRepository: Repository<Score>,
    private usersService: UsersService,
  ) {}

  async create(createScoreDto: CreateScoreDto, user: User) {
    const { moves, difficulty } = createScoreDto;

    const score = new Score();
    score.moves = moves;
    score.difficulty = difficulty;
    score.user = user;

    return this.scoresRepository.save(score);
  }

  findAll() {
    return this.scoresRepository.find();
  }

  findAllByUser(user: User) {
    return this.scoresRepository.findBy({ user: user });
  }
}
