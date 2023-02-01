import { AppDataSource } from "../../data-source";
import AppError from "../../errors/appError";
import { hash } from "bcryptjs";
import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contact.entity";

import { IUserRequest } from "../../interfaces/users";

const createUserService = async ({
  name,
  email,
  password,
  number,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contacts);

  const emailAlreadyExists = await userRepository.findOneBy({ email });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 409);
  }

  const user = userRepository.create({
    name,
    email,
    password: await hash(password, 10),
    number,
  });

  await userRepository.save(user);

  return user;
};
export default createUserService;
