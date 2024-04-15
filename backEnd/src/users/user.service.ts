import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";
import { UserEntity } from "./user";

export type User = any;


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
    async findOne(name: string): Promise<User | undefined>{
        return this.users.find(user => user.name === name);
    }
}
    
    

     

    