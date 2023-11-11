import { PartialType } from '@nestjs/swagger';
import { CreateScoreDto } from './create-score.dto.js';

export class UpdateScoreDto extends PartialType(CreateScoreDto) {}
