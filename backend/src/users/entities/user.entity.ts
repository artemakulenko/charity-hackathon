import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  nickname: string;

  @Column({
    nullable: true,
    default: null,
  })
  passwordHash: string;

  @CreateDateColumn()
  createdAt: string
}
