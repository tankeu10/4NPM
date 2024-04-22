
import { ActionEntity } from 'src/action/action.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class TypeAction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ActionEntity, action => action.typeAction)
  actions: ActionEntity[];
}

