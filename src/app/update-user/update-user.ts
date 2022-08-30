import IUseCase from "@/app/iuse-case";
import User, { UserRepository } from "@/entities/User";
import GetUserById from "../get-user-by-id";

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
