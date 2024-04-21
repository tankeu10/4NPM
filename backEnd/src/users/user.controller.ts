import { Controller, Get, Post, Param, Put, Body, Delete, Res, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(@Res() res: any) {
        const users = await this.userService.findAll();
        return res.status(HttpStatus.OK).json(users);
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

    @Put(":id")
    async update(@Param('id') id: string, @Body() updatedUser: Partial<UserEntity>, @Res() res: any) { 
        const updatedUserData = await this.userService.updateUser(parseInt(id), updatedUser);
        return res.status(HttpStatus.OK).json(updatedUserData);
    }

    @Delete(":id")
    async delete(@Param('id') id: string, @Res() res: any) {
        await this.userService.delete(parseInt(id));
        return res.status(HttpStatus.NO_CONTENT).send();
    }
}


