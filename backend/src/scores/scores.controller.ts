import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { ScoresService } from './scores.service.js';
import { CreateScoreDto } from './dto/create-score.dto.js';
import { Public } from '../auth/decorators/public.decorator.js';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  create(@Body() createScoreDto: CreateScoreDto, @Request() req) {
    return this.scoresService.create(createScoreDto, req.user);
  }

  @Public()
  @Get()
  findAll() {
    return this.scoresService.findAll();
  }

  @Get('my')
  findMy(@Request() req) {
    return this.scoresService.findAllByUser(req.user);
  }
}
