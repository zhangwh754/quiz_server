import userServices from "../services/user.services.js";
import authServices from "../services/auth.services.js";

class AuthController {
  constructor() {}

  /**
   * @description: 根据code获取token，用户不存在自动注册
   */
  async getToken(ctx, next) {
    const { code } = ctx.request.body;
    const { openid: openId } = await userServices.getOpenId({ code });

    if (!openId) ctx.throw(400, "获取OpenId失败");

    let user = await userServices.getUser({ openId });

    if (!user) {
      const newUser = await userServices.generateUser({ openId });

      user = newUser;
    }

    const token = await authServices.generateToken({ user });

    ctx.body = token;
  }

  /**
   * @description: 测试用根据openId获取token
   */
  async getToken2(ctx, next) {
    const { openId } = ctx.request.body;

    let user = await userServices.getUser({ openId });

    const token = await authServices.generateToken({ user });

    ctx.body = token;
  }
}

export default new AuthController();
