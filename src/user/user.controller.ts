import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user-entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // constructor(private UserService: userRepo) {}
  /**GET Method */
  @Get()
  getHello(): Promise<User[]> {
    return this.userService.get();
  }
  /**Post Method */
  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }
  /**GET Method By Id*/
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }
  /**DELETe Method By Id*/
  @Delete('/:id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
  /**PATCH Method By Id*/
  @Patch('/:id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(updateUserDto, id);
  }
}
