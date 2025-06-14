import { Base } from 'src/common/entity/base-entity.dto';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['email', 'phone'])
export class User extends Base {
  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  nationalCode: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  fathername: string;
}
