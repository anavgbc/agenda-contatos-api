import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import CreateContactService from "../services/contacts/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user.id;

  const createContact = await CreateContactService(userId, data);

  return res.status(201).json({ data: instanceToPlain(createContact) });
};
