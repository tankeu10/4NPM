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

  async findAll(): Promise<TypeAction[]> {
    return this.typeActionRepository.find();
  }

  async findOne(typ_id: number): Promise<TypeAction> {
    return this.typeActionRepository.findOne({ where: { typ_id } });
}

  async create(typeAction: TypeAction): Promise<TypeAction> {
    return this.typeActionRepository.save(typeAction);
  }

  async update(typ_id: number, updatedTypeAction: TypeAction): Promise<TypeAction | undefined> {
    const result = await this.typeActionRepository.update(typ_id, updatedTypeAction);
    if (result.affected === 1) {
        return this.typeActionRepository.findOne({ where: { typ_id } });
    }
    return undefined;
}


  async delete(typ_id: number): Promise<void> {
    await this.typeActionRepository.delete(typ_id);
  }
}