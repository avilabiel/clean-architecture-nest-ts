import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";
import CreateUser from "./create-user";

describe("CreateUser", () => {
  it("creates a user", async () => {
    const user = { name: "Testevaldo Silva", email: "testevaldo@gmail.com" };

    const persistedUser = await CreateUser.execute({
      user,
      userRepository: new UserRepositoryInMemory(),
    });

    expect(persistedUser).toMatchObject({
      id: 1,
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    });
    expect(persistedUser).toHaveProperty("createdAt");
  });

  describe("validating fields", () => {
    it("throws an error when name is invalid", async () => {
      const user = { name: "", email: "testevaldo@gmail.com" };

      try {
        await CreateUser.execute({
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
