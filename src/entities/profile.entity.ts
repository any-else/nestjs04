import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'profiles' })
export class ProfileEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  pro_id: number;
  @Column()
  avatar: string;
  @Column()
  address: string;
  @Column()
  job: string;
  @Column()
  isMarried: boolean;

  /** xác định mối quan hệ */
  @OneToOne(() => UserEntity, (user) => user.profile)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity | number;
}
