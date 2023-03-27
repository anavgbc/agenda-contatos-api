import { User } from "../../entities/user.entity";

export interface IContactRequest {
  firstName: string;
  lastName?: string;
  email: string;
  number: string;
  img?: string;
}

export interface IContactUpdate {
  id: string;
  createdAt?: Date;
  firstName?: string;
  lastName?: string;
  email?: string;
  number?: string;
  user?: string;
  id_user?: string;
  favorite?: boolean;
  img?: string;
  note?: string;
}
