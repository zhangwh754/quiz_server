class UserServices {
  constructor() {}

  async getUser(userId) {
    const user = {
      id: userId,
      name: "John Doe",
      email: "john@doe.com",
      password: "123456",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return user;
  }
}

export default new UserServices()