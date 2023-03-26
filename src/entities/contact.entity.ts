import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  number: string;

  @Column({ default: false })
  favorite: boolean;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
