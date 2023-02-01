import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import AppError from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contacts";

const updateContactService = async ({
  name,
  email,
  number,
  createdAt,
  user,
  id,
  id_user,
}: IContactUpdate): Promise<Contacts> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const findContact = await contactRepository.find({
    where: {
      id: id,
    },
    relations: {
      user: true,
    },
  });

  console.log(findContact[0].user);
  if (!findContact[0]) {
    throw new AppError("Contact not found", 404);
  }

  if (findContact[0].user.id != id_user) {
    throw new AppError("You're not the owner of this contact", 401);
  }

  await contactRepository.update(findContact[0].id, {
    name,
    email,
    number,
  });

  const contact = await contactRepository.findOneBy({
    id,
  });

  return contact!;
};

export default updateContactService;
