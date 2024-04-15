import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserEntity } from "./user";
import { UsersModule } from './users.module';
import { UsersService } from './users.service';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), UsersModule],
    controllers: [UserController],
    providers: [UserService ],
    exports: [UserService],
})
export class UserModel {}
