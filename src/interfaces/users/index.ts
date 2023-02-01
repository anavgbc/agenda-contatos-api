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
  isAdm: boolean;
}
