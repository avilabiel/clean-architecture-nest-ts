import User, { UserRepository } from "@/entities/User";

export default class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [];

  create({ user }: { user: User }): Promise<User> {
    user.id = this.users.length;

    this.users.push(user);

    return Promise.resolve(user);
  }
}
