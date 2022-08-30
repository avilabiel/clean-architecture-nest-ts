import { Controller, Get } from "@nestjs/common";
import ListUsers from "@/app/list-users";
import User from "@/entities/User";
import config from "@/config";

@Controller("users")
export class UserController {
  @Get()
  async findAll(): Promise<User[]> {
    return await ListUsers.execute({
      userRepository: config.repositories.userRepository,
    });
  }
}
