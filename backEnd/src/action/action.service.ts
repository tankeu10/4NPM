import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";
import { ActionEntity} from "./action.entity";


@Injectable()
export class ActionService {
    constructor(
        @InjectRepository(ActionEntity)
        private actionRepository: Repository<ActionEntity>
    ) { }

    findAll(): Promise<ActionEntity[]> {
        
        return this.actionRepository.find();
    }
    async findOne(action_id: number): Promise<ActionEntity> {
        return this.actionRepository.findOne({ where: { action_id } });
    }
    
    create(action: ActionEntity):  Promise<ActionEntity>{
       return this.actionRepository.save(action); 
    }
    

    async deleteUser(action_id: number): Promise<void> {
        await this.actionRepository.delete(action_id);

    }
    async remove (action_id: number, action: ActionEntity  ) {
        await this.actionRepository.update(action_id, action);
    }
    async delete(action_id: number): Promise<any> { 

        return { message: 'Delete method not implemented yet' };
    }  
    async updateAction(action_id: number, updatedaction: ActionEntity): Promise<any> { 
        return { message: 'Update method not implemented yet' };
    }
 }

