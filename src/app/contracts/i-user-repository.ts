import User from "@/entities/user";

export default interface UserRepository {
  create({ user }: { user: User }): Promise<User>;

  getById(userId: number): Promise<User | null>;

  delete(userId: number): Promise<void>;

  getAll(): Promise<User[]>;

  update(user: User): Promise<User>;
}
