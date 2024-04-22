import { Controller, Get, Post, Param, Put, Body, Delete, Res, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user";
import { ApiTags } from "@nestjs/swagger";

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    
    @Get()
    findAll(){
        return this.userService.findAll();
    }
    
    @Get(":id")
    async findOne(@Param('id') id: string, @Res() res: any) { 
        const user = await this.userService.findOne((id));
        return res.status(HttpStatus.OK).json(user);
    }


    @Post()
    async create(@Body() createUserDto: Partial<UserEntity>, @Res() res: any) {
        const newUser = await this.userService.create(createUserDto);
        return res.status(HttpStatus.CREATED).json(newUser);
    }

    // @ApiTags('put')
    // @Put(":id")
    // async update(@Param('id') id: string, @Body() updatedUser: Partial<UserEntity>, @Res() res: any) { 
    //     const updatedUserData = await this.userService.updateUser(parseInt(id), updatedUser);
    //     return res.status(HttpStatus.OK).json(updatedUserData);
    // }

    
    @Delete(":id")
    delete(@Param('id') id : number){
        return this.userService.delete(id);
    }
    
    
}


