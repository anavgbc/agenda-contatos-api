import { Router } from "express";
import { createContactController } from "../controllers/contact.controllers";
import isLoggedInMiddleware from "../middlewares/isLoggedIn.middleware";

const contactRoutes = Router();

contactRoutes.post("", isLoggedInMiddleware, createContactController);

export default contactRoutes;
