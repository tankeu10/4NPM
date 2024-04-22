import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";
import { ActionEntity} from "./action.entity";
import { OffsetWithoutLimitNotSupportedError } from "typeorm";
import { CreateActionDto } from "./dto/create-action.dto";
import { UpdateActionDto } from "./dto/update-action.dto";

@Injectable()
export class ActionService {
    constructor(
        @InjectRepository(ActionEntity)
        private actionRepository: Repository<ActionEntity>
    ) { }

    findAll(): Promise<ActionEntity[]> {
        return this.actionRepository.find();
    }
    findOne(action_id: number){
        return this.actionRepository.findOne({ where: { action_id } });
    }
    
    create(action: ActionEntity){
       return 'This action adds a new action';
    }
    


    async remove (action_id: number, action: ActionEntity  ) {
        await this.actionRepository.update(action_id, action);
    }
    async delete(action_id: number): Promise<any> { 

        return { message: 'Delete method not implemented yet' };
    }  
    async updateAction(action_id: number, updatedaction: ActionEntity): Promise<any> { 
        return 'This action updates a #${id} action';
    }
 }

