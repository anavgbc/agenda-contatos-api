export interface IUserRequest {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  number: string;
  img?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserDecoded {
  id: string;
}

export interface IUserUpdate {
  firstName?: string;
  lastName?: string;
  number?: string;
  password?: string;
  email?: string;
  id?: string;
  userId?: string;
  img?: string;
}
