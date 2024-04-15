import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserEntity } from 'src/users/user';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column()
  roleName: string;

 
}
