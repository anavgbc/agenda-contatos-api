import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
const updateUserService = async ({
  name,
  email,
  password,
  id,
  userId,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contacts);

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
    name,
    email,
    password: password ? await hash(password, 10) : findUser.password,
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
