import { Controller, Get, Post, Param, Put, Body, Delete, Res, HttpStatus } from "@nestjs/common";
import { UserService} from "./user.service";
import { Response } from 'express';
import { UserEntity } from "./user";



@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async findAll(@Res() res: Response) {
        const response = await this.userService.findAll();
    
        return response;
      
    }
    @Get(":id")
    async findOne(@Param('id') id: number){ 
        const response = await this.userService.findOne(id);
        return response;
    }

    @Post(":id")
    async create (@Body() createUserDto: UserEntity){
        const response = await this.userService.create(createUserDto);
        return response;
    }
    @Put("id")
    async update(@Param('id') id: number, @Body() updatedUser: UserEntity){ 
        const response = await this.userService.updateUser(id, updatedUser);
        return response;

    }
    @Delete()
    async delete(id: number): Promise<any> {
        const response = await this.userService.delete(id);
        return response;
    }
    



}


