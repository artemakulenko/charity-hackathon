import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service.js';
import { ScoresController } from './scores.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/score.entity.js';
import { UsersService } from '../users/users.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Score])],
  controllers: [ScoresController],
  providers: [ScoresService, UsersService],
  exports: [TypeOrmModule],
})
export class ScoresModule {}
