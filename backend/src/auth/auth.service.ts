import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException('Wrong user nickname or password');
    }

    const isMatch = await bcrypt.compare(pass, user?.passwordHash ?? '');
    if (!isMatch) {
      throw new UnauthorizedException('Wrong user nickname or password');
    }

    const payload = { sub: user.id, nickname: user.nickname };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(nickname: string, password: string): Promise<any> {
    const existingUser = await this.usersService.findOne(nickname);
    if (existingUser) {
      throw new BadRequestException('Nickname already taken');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      nickname: nickname,
      passwordHash: passwordHash,
    });

    const payload = { sub: user.id, nickname: user.nickname };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
