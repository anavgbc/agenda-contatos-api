import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import CreateContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import retrieveContactService from "../services/contacts/retrieveContact.service";
import retrieveFavoritesService from "../services/contacts/retrieveFavorites.service";
import updateContactService from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user.id;

  const createContact = await CreateContactService(userId, data);

  return res.status(201).json(instanceToPlain(createContact));
};

export const retrieveContactController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const contact = await retrieveContactService(id);
  return res.json(instanceToPlain(contact));
};

export const retrieveFavoritesController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.id;
  console.log(req.route);

  const contacts = await retrieveFavoritesService(userId);
  return res.json(instanceToPlain(contacts));
};

export const updateContactController = async (req: Request, res: Response) => {
  const contact = req.body;

  contact.id = req.params.id;
  contact.id_user = req.user.id;

  const updatedContact = await updateContactService(contact);
  return res.json(updatedContact);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const id_user = req.user.id;
  await deleteContactService(id, id_user);

  return res.status(204).send();
};
