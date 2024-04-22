import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions } from "typeorm";

import { Repository } from "typeorm";
import { UserEntity } from "./user";

@Injectable()
export class UserService {
    private readonly users = [
        {
            id: 1,
            name: 'xavier',
            email: 'xv@i.com',
            password: 'xavi',

        },
        {
            id: 2,
            name: 'louise',
            email: 'louise5@d.com',
            password: 'l0000',
        },
    ];
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

    async create(createUserDto: Partial<UserEntity>): Promise<UserEntity> {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    // async updateUser(id: number | FindOneOptions<UserEntity>, updatedUser: Partial<UserEntity>): Promise<UserEntity | undefined> {
    //     let existingUser: UserEntity;

    //     if (typeof id === 'number') {
    //         existingUser = await this.userRepository.findOne(id);
    //     } else {
    //         existingUser = await this.userRepository.findOne(id);
    //     }

    //     if (!existingUser) {
    //         return undefined; 
    //     }

    //     Object.assign(existingUser, updatedUser);

    //     return this.userRepository.save(existingUser);
    // }



    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
  
    

     

    