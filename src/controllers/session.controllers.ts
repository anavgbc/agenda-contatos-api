import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createSessionService from "../services/sessions/createSession.service";

export const createSessionController = async (req: Request, res: Response) => {
  const login = req.body;
  const data = await createSessionService(login);
  return res.json(instanceToPlain(data));
};
