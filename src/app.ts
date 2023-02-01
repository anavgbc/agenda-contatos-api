import express from "express";
import contactRoutes from "./routes/contact.routes";
import sessionRoutes from "./routes/session.routes";
import usersRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", sessionRoutes);

app.listen(3000);
