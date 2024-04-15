
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ActionEntity } from '../action/action.entity';

@Entity()
export class TypeAction {
  @PrimaryGeneratedColumn()
  typ_id: number;

  @Column()
  name: string;

  @OneToMany(() => ActionEntity, action => action.typeAction)
  actions: ActionEntity[];
}