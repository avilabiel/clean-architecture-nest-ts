import User, { UserRepository } from "@/entities/User";

export default class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [];

  create({ user }: { user: User }): Promise<User> {
    user.id = this.users.length + 1;
    user.createdAt = new Date();

    this.users.push(user);

    return Promise.resolve(user);
  }

  getById(userId: number): Promise<User | null> {
    return Promise.resolve(
      this.users.find((user) => user.id === userId) ?? null
    );
  }

  delete(userId: number): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === userId);

    this.users.splice(userIndex, 1);

    return Promise.resolve();
  }
}
