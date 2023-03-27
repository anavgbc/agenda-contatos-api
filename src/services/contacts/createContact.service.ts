import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts";

const CreateContactService = async (
  userId: string,
  { firstName, email, number, img, lastName }: IContactRequest
): Promise<Contacts> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!firstName && !email) {
    throw new AppError("Cannot create an empty contact", 403);
  }

  if (!img) {
    img =
      "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max";
  }

  const newContact = contactRepository.create({
    firstName,
    lastName,
    email,
    number,
    user: user!,
    favorite: false,
    img,
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
