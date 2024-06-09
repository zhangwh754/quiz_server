import userServices from "../services/user.services.js";

class userController {
  constructor() {}

  async getUser(ctx, next) {
    ctx.body = ctx.user;
  }
}

export default new userController();
