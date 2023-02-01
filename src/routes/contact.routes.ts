import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import isLoggedInMiddleware from "../middlewares/isLoggedIn.middleware";

const contactRoutes = Router();

contactRoutes.post("", isLoggedInMiddleware, createContactController);
contactRoutes.get("/:id", isLoggedInMiddleware, retrieveContactController);
contactRoutes.patch("/:id", isLoggedInMiddleware, updateContactController);
contactRoutes.delete("/:id", isLoggedInMiddleware, deleteContactController);

export default contactRoutes;
