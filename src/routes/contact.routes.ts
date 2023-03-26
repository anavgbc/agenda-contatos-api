import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  retrieveContactController,
  retrieveFavoritesController,
  updateContactController,
} from "../controllers/contact.controllers";
import isLoggedInMiddleware from "../middlewares/isLoggedIn.middleware";

const contactRoutes = Router();

contactRoutes.get(
  "/favorites",
  isLoggedInMiddleware,
  retrieveFavoritesController
);
contactRoutes.post("", isLoggedInMiddleware, createContactController);
contactRoutes.get("/:id", isLoggedInMiddleware, retrieveContactController);
contactRoutes.patch("/:id", isLoggedInMiddleware, updateContactController);
contactRoutes.delete("/:id", isLoggedInMiddleware, deleteContactController);

export default contactRoutes;
