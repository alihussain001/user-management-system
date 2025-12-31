import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user-interfaces';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [];

  getAllUser(): User[] {
    return this.users;
  };
  
  addUser(createUserDto:CreateUserDto): User{
    const newUser: User = {
        id: Date.now(),
        ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

}
