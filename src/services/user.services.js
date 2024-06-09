import connection from "../app/database.js";

class UserServices {
  constructor() {}

  async getUser({ name }) {
    const [results] = await connection.query(
      `
        SELECT
          user_id, username, email, created_at
        FROM Users
          WHERE username = ?;
      `,
      [name]
    );

    return results[0];
  }
}

export default new UserServices();
