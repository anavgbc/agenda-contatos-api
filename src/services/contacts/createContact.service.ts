import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts";

const CreateContactService = async (
  userId: string,
  { name, email, number }: IContactRequest
): Promise<Contacts> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  if (!name && !email) {
    throw new AppError("Cannot create an empty contact", 403);
  }

  if (name === "" && email === "") {
    throw new AppError("Cannot create an empty contact", 403);
  }

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const newContact = contactRepository.create({
    name,
    email,
    number,
    user: user!,
  });

  await contactRepository.save(newContact);

  const contact = await contactRepository.findOne({
    where: {
      id: newContact.id,
    },
  });

  return contact!;
};

export default CreateContactService;
