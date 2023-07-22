import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('profile')
export class ProfileController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  profile() {
    return "I'm a protected profile";
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/2')
  profile2() {
    return "I'm a protected profile2";
  }
}
