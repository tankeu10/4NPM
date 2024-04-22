import { Entity, PrimaryGeneratedColumn, Column,JoinColumn, ManyToOne } from 'typeorm';
import { TypeAction } from '../typeaction/type-action.entity';
import { UserEntity } from 'src/users/user';

@Entity()
export class ActionEntity {
  @PrimaryGeneratedColumn()
  action_id: number;

  @Column()
  date: Date;
  

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.id)
  @JoinColumn({name: 'userId'})
  user: UserEntity;
  @ManyToOne(() => TypeAction, (TypeAction) => TypeAction.typ_id)
  @JoinColumn({name: 'typ_actionId'})
  typeAction: TypeAction;

}