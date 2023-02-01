import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import retrieveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json({ data: instanceToPlain(createdUser) });
};
export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json({ data: instanceToPlain(users) });
};

export const retrieveUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await retrieveUserService(id);
  return res.json({ data: instanceToPlain(user) });
};

export const updateUserController = async (req: Request, res: Response) => {
  const user = req.body;
  user.userId = req.params.id;
  const updatedUser = await updateUserService(user);
  return res.json({ data: instanceToPlain(updatedUser) });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);

  return res.status(204).send();
};
