import {
  Body,
  Controller,
  Get,
  Param,
  // ParseBoolPipe,
  ParseIntPipe,
  Post,
  // Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  // @Get()
  // getUsersSort(@Query('sort', ParseBoolPipe) sort: boolean) {
  //   console.log(sort);
  //   return { sort };
  // }

  @Get('/profile')
  getProfile() {
    return [{ name: 'John Doe', age: 30, password: '123456' }];
  }

  // @Post()
  // @UsePipes(new ValidationPipe())
  // createUser(@Body() userData: CreateUserDto) {
  //   console.log(userData);
  //   return userData;
  // }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    this.userService.createUser(userData);
    return userData;
  }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //   console.log(id);
  //   return { id };
  // }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.userService.getUserById(id);
  }
}
