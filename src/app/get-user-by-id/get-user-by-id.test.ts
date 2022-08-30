import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";
import CreateUser from "../create-user";
import GetUserById from "./get-user-by-id";

describe("GetUserById", () => {
  it("returns a user", async () => {
    const user = { name: "Testevaldo Silva", email: "testevaldo@gmail.com" };
    const repositoryInMemory = new UserRepositoryInMemory();

    await CreateUser.execute({ user, userRepository: repositoryInMemory });

    const persistedUser = await GetUserById.execute({
      userId: 1,
      userRepository: repositoryInMemory,
    });

    expect(persistedUser).toMatchObject({
      id: 1,
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    });
    expect(persistedUser).toHaveProperty("createdAt");
  });

  it("returns a null when user does not exist", async () => {
    const repositoryInMemory = new UserRepositoryInMemory();

    const persistedUser = await GetUserById.execute({
      userId: 1,
      userRepository: repositoryInMemory,
    });

    expect(persistedUser).toEqual(null);
  });
});
