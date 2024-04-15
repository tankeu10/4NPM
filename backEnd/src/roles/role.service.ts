import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleEntity } from "./role.entity";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private RoleEntityRepository: Repository<RoleEntity>
    ) { }

    async findAll(): Promise<RoleEntity[]> {
        return this.RoleEntityRepository.find();
    }

    async findOne(role_id: number): Promise<RoleEntity> {
        return this.RoleEntityRepository.findOne({ where: { role_id } });
    }

    async create(RoleEntity: RoleEntity): Promise<RoleEntity> {
        return this.RoleEntityRepository.save(RoleEntity);
    }

    async update(role_id: number, updatedRoleEntity: RoleEntity): Promise<RoleEntity | undefined> {
        const result = await this.RoleEntityRepository.update(role_id, updatedRoleEntity);
        if (result.affected === 1) {
            return this.RoleEntityRepository.findOne({ where: { role_id } });
        }
        return undefined;
    }
    
    

    async delete(role_id: number): Promise<void> {
        await this.RoleEntityRepository.delete(role_id);
    }
}

