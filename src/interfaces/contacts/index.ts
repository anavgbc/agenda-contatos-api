import { User } from "../../entities/user.entity";

export interface IContactRequest {
  name: string;
  email: string;
  number: string;
}

export interface IContactUpdate {
  id: string;
  createdAt?: Date;
  name?: string;
  email?: string;
  number?: string;
  user?: string;
  id_user?: string;
}
