import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Contacts } from "./contact.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  firstName: string;

  @Column({ length: 60, nullable: true })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  number: string;

  @Column({ nullable: true })
  img: string;

  @OneToMany(() => Contacts, (contacts) => contacts.user, {
    cascade: true,
  })
  contacts: Contacts[];
}
