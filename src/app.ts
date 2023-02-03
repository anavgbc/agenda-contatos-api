import express from "express";
import contactRoutes from "./routes/contact.routes";
import sessionRoutes from "./routes/session.routes";
import usersRoutes from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", sessionRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
