import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  age: number;
  password: string;
}
