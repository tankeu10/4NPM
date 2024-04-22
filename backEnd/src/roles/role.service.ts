import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OffsetWithoutLimitNotSupportedError } from "typeorm";
import {CreateRoleDto} from "./dto/create-role.dto"
import { UpdateRoleDto } from "./dto/update-role.dto";
import { RoleEntity } from "./role.entity";
import { CreateActionDto } from "src/action/dto/create-action.dto";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private RoleEntityRepository: Repository<RoleEntity>
    ) { }

    findAll(): Promise<RoleEntity[]> {
        return this.RoleEntityRepository.find();
    }

    findOne(role_id: number): Promise<RoleEntity | null > {
        return this.RoleEntityRepository.findOne({ where: { role_id } });
    }

    create(RoleEntity: RoleEntity){
        return 'This action adds a new role';
    }

    update(role_id: number, updatedRoleEntity: RoleEntity) {
       return 'This action updates a #${id} role';
    }
    
    

    async delete(role_id: number): Promise<void> {
        await this.RoleEntityRepository.delete(role_id);
    }
}

