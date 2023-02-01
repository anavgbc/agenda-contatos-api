import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const retrieveContactService = async (id: string) => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactsRepository.find({
    relations: {
      user: true,
    },
    where: {
      id,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return contact;
};

export default retrieveContactService;
