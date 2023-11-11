import { Body, Controller, Get, Post, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from "./auth.service.js";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() signUpDto: Record<string, any>) {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
