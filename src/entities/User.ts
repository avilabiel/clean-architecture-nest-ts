export default class User {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;

  constructor(props: User) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.createdAt = props.createdAt;
  }
}

export interface UserRepository {
  create({ user }: { user: User }): Promise<User>;

  getById(userId: number): Promise<User | null>;

  delete(userId: number): Promise<void>;

  getAll(): Promise<User[]>;

  update(user: User): Promise<User>;
}
