import { Module } from "@nestjs/common";
import { TypeActionService } from "./type-action.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeActionController } from "./type-action.controller";
import { TypeAction } from "./type-action.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TypeAction])],
    controllers:[TypeActionController],
    providers: [TypeActionService],
})
export class TypeActionModule {}
