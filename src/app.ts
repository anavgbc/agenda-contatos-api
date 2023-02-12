import "reflect-metadata";
import express from "express";
import "express-async-errors";
import contactRoutes from "./routes/contact.routes";
import sessionRoutes from "./routes/session.routes";
import usersRoutes from "./routes/user.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", sessionRoutes);

app.use(handleErrorMiddleware);

export default app;
