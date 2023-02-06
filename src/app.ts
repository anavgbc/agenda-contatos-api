import express from "express";
import contactRoutes from "./routes/contact.routes";
import sessionRoutes from "./routes/session.routes";
import usersRoutes from "./routes/user.routes";
import "express-async-errors";
import "reflect-metadata";

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", sessionRoutes);

export default app;
