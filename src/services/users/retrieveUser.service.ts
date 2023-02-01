import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { Contacts } from "../../entities/contact.entity";

const retrieveUserService = async (id: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const returnUser = await usersRepository.find({
    where: {
      id: id,
    },
    relations: {
      contacts: true,
    },
  });

  if (returnUser.length === 0) {
    throw new AppError("User not found", 404);
  }

  return returnUser;
};

export default retrieveUserService;
