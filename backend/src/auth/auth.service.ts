import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const isMatch = await bcrypt.compare(pass, user?.passwordHash ?? '');
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, nickname: user.nickname };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user) {
      throw new UnauthorizedException();
    }

    const hash = await bcrypt.hash(pass, 10);
    const isMatch = await bcrypt.compare(pass, user?.passwordHash ?? '');
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const { passwordHash, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object

    return result;
  }
}
