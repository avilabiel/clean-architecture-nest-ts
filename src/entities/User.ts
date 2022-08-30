export default class User {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;

  constructor(props: User) {
    Object.assign(this, props);
  }
}

export interface UserRepository {
  create({ user }: { user: User }): Promise<User>;
}