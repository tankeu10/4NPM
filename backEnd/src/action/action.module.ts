import { Module } from "@nestjs/common";
import { ActionService } from "./action.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActionController } from "./action.controller";
import { ActionEntity } from "./action.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ActionEntity])],
    controllers: [ActionController],
    providers: [ActionService],
})
export class ActionModel {}