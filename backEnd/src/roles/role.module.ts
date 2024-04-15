import { Module } from "@nestjs/common";
import { RoleService } from "./role.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleController } from "./role.controller";
import { RoleEntity } from "./role.entity";


@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModel {}