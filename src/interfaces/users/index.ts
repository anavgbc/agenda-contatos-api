export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  number: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserDecoded {
  id: string;
}

export interface IUserUpdate {
  name?: string;
  number?: string;
  password?: string;
  email?: string;
  id?: string;
  userId?: string;
}
