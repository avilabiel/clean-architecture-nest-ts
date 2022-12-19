import CreateUser from "@/app/use-cases/create-user";
import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";
import ListUsers from "./list-users";

describe("ListUsers", () => {
  it("lists users", async () => {
    const firstUser = {
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    };

    const secondUser = {
      name: "Testevalda Silva",
      email: "testevalda@gmail.com",
    };

    const repositoryInMemory = new UserRepositoryInMemory();

    await CreateUser.execute({
      user: firstUser,
      userRepository: repositoryInMemory,
    });

    await CreateUser.execute({
      user: secondUser,
      userRepository: repositoryInMemory,
    });

    const persistedUsers = await ListUsers.execute({
      userRepository: repositoryInMemory,
    });

    expect(persistedUsers).toHaveLength(2);
    expect(persistedUsers[0]).toMatchObject({
      id: 1,
      name: "Testevaldo Silva",
      email: "testevaldo@gmail.com",
    });
    expect(persistedUsers[1]).toMatchObject({
      id: 2,
      name: "Testevalda Silva",
      email: "testevalda@gmail.com",
    });
  });
});
