
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
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
  
  @OneToMany(()=> UserEntity, (UserEntity) => UserEntity.id)
  users: UserEntity[];
  
  constructor(
    name: string,
    email: string,
    password: string,

  ){
    this.name = name;
    this.email = email;
    this.password = password;
  }

  @OneToMany(() => ActionEntity, action => action.typeAction)
  actions: ActionEntity[];

  }
