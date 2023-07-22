import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
@Controller('/auth')
export class AuthController {
  /** auth service**/
  constructor(private authService: AuthService) {}
  /** validate email and password have in database or not**/
  @UseGuards(AuthGuard('local'))
  /** route /auth/login **/
  @Post('/login')
  /** function for login**/
  async login(@Request() req) {
    /** validate with jwt **/
    return this.authService.login(req.user);
  }
}
