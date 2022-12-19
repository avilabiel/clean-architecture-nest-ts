import CreateUser from "@/app/use-cases/create-user";
import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";
import UpdateUser from "./update-user";

describe("UpdateUser", () => {
  it("updates a user", async () => {
    const user = { name: "Testevaldo Silva", email: "testevaldo@gmail.com" };
    const repositoryInMemory = new UserRepositoryInMemory();

    await CreateUser.execute({ user, userRepository: repositoryInMemory });

    const updatedUser = await UpdateUser.execute({
      user: {
        id: 1,
        name: "Alex Baldwin",
        email: "alex.baldwin@gmail.com",
      },
      userRepository: repositoryInMemory,
    });

    expect(updatedUser).toMatchObject({
      id: 1,
      name: "Alex Baldwin",
      email: "alex.baldwin@gmail.com",
    });
    expect(updatedUser).toHaveProperty("createdAt");
  });

  it("throws an error when user does not exist", async () => {
    const repositoryInMemory = new UserRepositoryInMemory();

    try {
      const updatedUser = await UpdateUser.execute({
        user: {
          name: "Alex Baldwin",
          email: "alex.baldwin@gmail.com",
        },
        userRepository: repositoryInMemory,
      });
    } catch (error: any) {
      expect(error.message).toEqual("User does not exist");
    }
  });
});
