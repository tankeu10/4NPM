import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions } from "typeorm";

import { Repository } from "typeorm";
import { UserEntity } from "./user";
import { UpdateActionDto } from "src/action/dto/update-action.dto";
import * as hashing from 'bcrypt'
@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async findOne(name: string): Promise<UserEntity | undefined> {
        return this.userRepository.findOne({ where: { name } });
    }

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    create(createUserDto: Partial<UserEntity>): Promise<UserEntity> {
        console.log('create user: ');
        const saltOrRounds = 10;
        createUserDto.password = hashing.hashSync(
            createUserDto.password,
            saltOrRounds,
        );
        var newUser = new UserEntity()
        return this.userRepository.save(newUser)
    }   

    async update(id:number, updateUserDto: UpdateActionDto){
        return 'This action update a #${id} user';
    }


    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
  
    

     

    