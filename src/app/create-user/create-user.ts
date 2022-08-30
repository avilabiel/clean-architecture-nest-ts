import IUseCase from "@/app/iuse-case";
import User, { UserRepository } from "@/entities/User";

class CreateUser implements IUseCase {
  async execute({
    user,
    userRepository,
  }: {
    user: User;
    userRepository: UserRepository;
  }): Promise<User> {
    const persistedUser = await userRepository.create({ user });

    return persistedUser;
  }
}

export default new CreateUser();
