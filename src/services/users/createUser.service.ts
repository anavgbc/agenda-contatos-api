import { AppDataSource } from "../../data-source";
import AppError from "../../errors/appError";
import { hash } from "bcryptjs";
import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contact.entity";

import { IUserRequest } from "../../interfaces/users";

const createUserService = async ({
  firstName,
  lastName,
  email,
  password,
  number,
  img,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contacts);

  const emailAlreadyExists = await userRepository.findOneBy({ email });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 409);
  }

  if (!img) {
    img =
      "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max";
  }

  const user = userRepository.create({
    firstName,
    lastName,
    email,
    password: await hash(password, 10),
    number,
    img,
  });

  await userRepository.save(user);

  return user;
};
export default createUserService;
