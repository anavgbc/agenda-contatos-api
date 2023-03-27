import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
const updateUserService = async ({
  firstName,
  lastName,
  email,
  password,
  id,
  userId,
  img,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (id !== undefined) {
    throw new AppError("id field cannot be updated", 401);
  }

  await userRepository.update(findUser.id, {
    firstName,
    lastName,
    email,
    password: password ? await hash(password, 10) : findUser.password,
    img,
  });

  const user = await userRepository.find({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });
  return user;
};

export default updateUserService;
