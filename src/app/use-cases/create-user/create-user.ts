import IUseCase from "@/app/contracts/i-use-case";
import User, { UserRepository } from "@/entities/user";

class CreateUser implements IUseCase {
  async execute({
    user,
    userRepository,
  }: {
    user: User;
    userRepository: UserRepository;
  }): Promise<User> {
    if (!user.email || user.email.length === 0) {
      throw new Error("Email is invalid");
    }

    if (!user.name || user.name.length === 0) {
      throw new Error("Name is invalid");
    }

    const persistedUser = await userRepository.create({ user });

    return persistedUser;
  }
}

export default new CreateUser();
