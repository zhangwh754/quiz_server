import jwt from "jsonwebtoken";

import config from "../app/config.js";
import connection from "../app/database.js";

class AuthServices {
  constructor() {}

  async generateToken({ user }) {
    const { openId, ...payload } = user;

    const token = jwt.sign(payload, config.PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, // 一天后token过期
      algorithm: "RS256",
    });

    return token;
  }
}

export default new AuthServices();
