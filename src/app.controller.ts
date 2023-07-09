import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /**GET Method */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /**Post Method */
  @Post()
  addUser(@Req() req: Request) {
    console.log(req.body);
    return 'hello ' + req.body.name;
  }
  /**GET Method By Id*/
  @Get('/:id')
  getUserById(@Param() { id }: { id: string }) {
    console.log(id);
    return 'hello user ' + id;
  }
  /**DELETe Method By Id*/
  @Delete('/:id')
  deleteUserById(@Param() { id }: { id: string }) {
    console.log(id);
    return 'delete user ' + id;
  }
  /**PATCH Method By Id*/
  @Patch('/:id')
  updateUserById(@Param() { id }: { id: string }) {
    console.log(id);
    return 'update user ' + id;
  }
}
