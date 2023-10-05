import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Do1e', age: 30 },
    { id: 2, name: 'John Do2e', age: 30 },
    { id: 3, name: 'John Do3e', age: 30 },
  ];
  fetchUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  getUserById(id: number) {
    return this.users[id];
  }
}
