import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json({ data: instanceToPlain(createdUser) });
};
export const listUsersController = async (req: Request, res: Response) => {
  //   const users = await listUsersService();
  //   return res.json({ data: instanceToPlain(users) });
};

export const retrieveUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const user = await retrieveUserService(id);
  // return res.json({ data: instanceToPlain(user) });
};
