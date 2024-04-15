
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TypeAction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


}
