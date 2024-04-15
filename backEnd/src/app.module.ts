import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  UserService } from './users/user.service';
import { UserModel } from './users/user.module';
import { UserController } from './users/user.controller';
import { UserEntity } from './users/user';
import { RoleEntity } from './roles/role.entity';
import { RoleService } from './roles/role.service';
import { RoleController } from './roles/role.controller';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'cynthia',
    password: 'root',
    database: 'test',
    entities: [UserEntity],
    synchronize: true, 
  }),

   TypeOrmModule.forFeature([UserEntity, RoleEntity]),

   AuthModule,],
  controllers: [AppController, RoleController],
  providers: [AppService, UserService, RoleService],
})
export class AppModule {}
