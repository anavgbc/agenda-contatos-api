import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controllers";
import isLoggedInMiddleware from "../middlewares/isLoggedIn.middleware";
import verifyOwnerAccountMiddleware from "../middlewares/verifyOwnerAccount.middleware";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get(
  "",
  isLoggedInMiddleware,

  listUsersController
);
usersRoutes.get("/:id", isLoggedInMiddleware, retrieveUserController);
usersRoutes.patch(
  "/:id",
  isLoggedInMiddleware,
  verifyOwnerAccountMiddleware,
  updateUserController
);

usersRoutes.delete(
  "/:id",
  isLoggedInMiddleware,
  verifyOwnerAccountMiddleware,
  deleteUserController
);

export default usersRoutes;
