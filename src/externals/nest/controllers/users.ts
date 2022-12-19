import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from "@nestjs/common";
import ListUsers from "@/app/list-users";
import User from "@/entities/user";
import config from "@/config";
import CreateUser from "@/app/use-cases/create-user";

@Controller("users")
export class UserController {
  @Get()
  async findAll(): Promise<User[]> {
    return await ListUsers.execute({
      userRepository: config.repositories.userRepository,
    });
  }

  @Post()
  async create(
    @Body() user: Omit<User, "id" | "createdAt">
  ): Promise<User | string> {
    try {
      return await CreateUser.execute({
        user,
        userRepository: config.repositories.userRepository,
      });
    } catch (error) {
      if (error.message.includes("is invalid")) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
