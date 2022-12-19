import IUseCase from "@/app/contracts/i-use-case";
import User, { UserRepository } from "@/entities/user";

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
