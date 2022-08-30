import { UserRepository } from "@/entities/User";
import GetUserById from "@/app/get-user-by-id";
import IUseCase from "@/app/iuse-case";

class DeleteUser implements IUseCase {
  async execute({
    userId,
    userRepository,
  }: {
    userId: number;
    userRepository: UserRepository;
  }): Promise<void> {
    const persistedUser = await GetUserById.execute({ userId, userRepository });

    if (!persistedUser) {
      throw new Error("User does not exist");
    }

    return await userRepository.delete(userId);
  }
}

export default new DeleteUser();
