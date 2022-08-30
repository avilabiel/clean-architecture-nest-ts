import { Module } from "@nestjs/common";
import { UserController } from "./controllers/users";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export default class AppModule {}
