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
