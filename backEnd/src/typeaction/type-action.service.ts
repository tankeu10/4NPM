import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeAction } from './type-action.entity';

@Injectable()
export class TypeActionService {
  constructor(
    @InjectRepository(TypeAction)
    private typeActionRepository: Repository<TypeAction>,
  ) {}

  findAll(): Promise<TypeAction[]> {
    return this.typeActionRepository.find();
  }

  findOne(typ_id: number){
    return this.typeActionRepository.findOne({ where: { typ_id } });
}

  async create(typeAction: TypeAction): Promise<TypeAction> {
    return this.typeActionRepository.save(typeAction);
  }

  update(typ_id: number, updatedTypeAction: TypeAction) {
    
    return 'This action updates a #${id} typeAction';
}

  async delete(typ_id: number): Promise<void> {
    await this.typeActionRepository.delete(typ_id);
  }
}