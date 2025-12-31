import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getUser(){
        return this.userService.getAllUser();
    };

    @Post()
    addUser(@Body() createUserDTo:CreateUserDto){
        return this.userService.addUser(createUserDTo);
    }
}
