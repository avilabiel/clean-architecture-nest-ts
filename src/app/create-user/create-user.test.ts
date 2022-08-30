import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";
import CreateUser from "./create-user";

describe("CreateUser", () => {
  it("creates a user", () => {
    const user = { name: "Testevaldo Silva", email: "testevaldo@gmail.com" };

    CreateUser.execute({ user, userRepository: new UserRepositoryInMemory() });
  });

  describe("validating fields", () => {
    it("throws an error when name is invalid", () => {
      const user = { name: "", email: "testevaldo@gmail.com" };

      try {
        CreateUser.execute({
          user,
          userRepository: new UserRepositoryInMemory(),
        });
      } catch (error: any) {
        expect(error.message).toEqual("Name is invalid");
      }
    });

    it("throws an error when email is invalid", async () => {
      const user = { name: "Testevaldo Silva", email: "" };

      try {
        await CreateUser.execute({
          user,
          userRepository: new UserRepositoryInMemory(),
        });
      } catch (error: any) {
        expect(error.message).toEqual("Email is invalid");
      }
    });
  });
});
