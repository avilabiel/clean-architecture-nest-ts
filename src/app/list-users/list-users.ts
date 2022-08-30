import IUseCase from "@/app/iuse-case";
import User, { UserRepository } from "@/entities/User";

class ListUsers implements IUseCase {
  async execute({
    userRepository,
  }: {
    userRepository: UserRepository;
  }): Promise<User[]> {
    const persistedUsers = await userRepository.getAll();

    return persistedUsers;
  }
}

export default new ListUsers();
