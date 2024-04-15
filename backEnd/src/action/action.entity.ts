import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TypeAction } from '../typeaction/type-action.entity';
import { UserEntity } from 'src/users/user';

@Entity()
export class ActionEntity {
  @PrimaryGeneratedColumn()
  action_id: number;

  @Column()
  date: Date;

  @ManyToOne(() => TypeAction, typeAction => typeAction.actions)
  typeAction: TypeAction;
  

}