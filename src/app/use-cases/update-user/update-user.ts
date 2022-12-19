import UserRepository from "@/app/contracts/i-user-repository";
import IUseCase from "@/app/contracts/i-use-case";
import User from "@/entities/user";
import GetUserById from "@/app/use-cases/get-user-by-id";

class UpdateUser implements IUseCase {
  async execute({
    user,
    userRepository,
  }: {
    user: User;
    userRepository: UserRepository;
  }): Promise<User> {
    const doesUserExist = await GetUserById.execute({
      userId: user.id,
      userRepository,
    });

    if (!doesUserExist) {
      throw new Error("User does not exist");
    }

    const updatedUser = await userRepository.update(user);

    return updatedUser;
  }
}

export default new UpdateUser();
