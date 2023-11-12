import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Score } from '../../scores/entities/score.entity.js';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
    length: 256,
  })
  nickname: string;

  @Column({
    unique: false,
    nullable: false,
    length: 256,
  })
  passwordHash: string;

  @CreateDateColumn({
    nullable: false,
  })
  createdAt: Date;

  @OneToMany('Score', 'user')
  scores: Score[];
}
