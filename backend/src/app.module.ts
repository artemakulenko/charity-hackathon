import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity.js';
import { ScoresModule } from './scores/scores.module.js';
import { Score } from './scores/entities/score.entity.js';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Score],
      autoLoadEntities: true,
      synchronize: true,
      migrations: ['./migrations/*.*'],
      migrationsTableName: 'migrations',
    }),
    ScoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
