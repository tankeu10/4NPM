import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  action_id: number;

  @Column()
  date: Date;



}
