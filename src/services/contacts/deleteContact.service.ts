import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const deleteContactService = async (id: string, id_user: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const findContact = await contactRepository.find({
    where: {
      id: id,
    },
    relations: {
      user: true,
    },
  });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  if (findContact[0].user.id != id_user) {
    throw new AppError("You're not the owner of this contact", 401);
  }

  await contactRepository.delete(id);

  return;
};

export default deleteContactService;
