import { AppDataSource } from "../../data-source";
import { compareSync } from "bcryptjs";
import { IUserLogin } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository
    .findOneBy({
      email,
    })
    .catch((err) => console.log(err));

  console.log(user);

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const correctPassword = compareSync(password, user.password);
  if (!correctPassword) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return { token, user };
};

export default createSessionService;
