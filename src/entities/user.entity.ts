import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileEntity } from './profile.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  user_id: number;

  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;

  /** xác định mối quan hệ */
  @OneToOne(() => ProfileEntity, (profile) => profile.user)
  profile: ProfileEntity;
}
