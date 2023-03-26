import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const retrieveFavoritesService = async (userId: string) => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const contacts = await contactsRepository.find({
    relations: {
      user: true,
    },
    where: {
      user: {
        id: userId,
      },
      favorite: true,
    },
  });

  return contacts;
};

export default retrieveFavoritesService;
