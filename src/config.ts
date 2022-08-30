import UserRepositoryInMemory from "@/externals/database/in-memory/user-repository-in-memory";

export default {
  repositories: {
    userRepository: new UserRepositoryInMemory(),
  },
};
