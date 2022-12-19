import User, { UserRepository } from "@/entities/user";
import IUseCase from "../iuse-case";

class GetUserById implements IUseCase {
  async execute({
    userId,
    userRepository,
  }: {
    userId: number;
    userRepository: UserRepository;
  }): Promise<User | null> {
    const persistedUserOrNull = await userRepository.getById(userId);

    return persistedUserOrNull;
  }
}

export default new GetUserById();
