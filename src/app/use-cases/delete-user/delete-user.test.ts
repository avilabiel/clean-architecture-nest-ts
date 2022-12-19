import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";
import CreateUser from "@/app/use-cases/create-user";
import DeleteUser from "./delete-user";

describe("DeleteUser", () => {
  it("deletes a user", async () => {
    const user = { name: "Testevaldo Silva", email: "testevaldo@gmail.com" };
    const repositoryInMemory = new UserRepositoryInMemory();

    await CreateUser.execute({ user, userRepository: repositoryInMemory });

    const persistedUser = await DeleteUser.execute({
      userId: 1,
      userRepository: repositoryInMemory,
    });

    expect(persistedUser).toBeUndefined();
  });

  it("throws an error when user does not exist", async () => {
    const repositoryInMemory = new UserRepositoryInMemory();

    try {
      const persistedUser = await DeleteUser.execute({
        userId: 1,
        userRepository: repositoryInMemory,
      });
    } catch (error: any) {
      expect(error.message).toEqual("User does not exist");
    }
  });
});
