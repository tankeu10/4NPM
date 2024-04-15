
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ActionEntity } from 'src/action/action.entity';
import { RoleEntity } from 'src/roles/role.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  




  }
