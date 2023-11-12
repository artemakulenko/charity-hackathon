import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity.js';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  moves: number;

  @Column({
    nullable: false,
  })
  difficulty: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne('User', 'scores')
  @JoinColumn()
  user: User;
}
