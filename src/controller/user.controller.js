import Router from "koa-router";
import userServices from "../services/user.services.js";

const router = new Router();

/**
 * @description: 根据code获取token，用户不存在自动注册
 */
router.post("/getToken", async (ctx, next) => {
  const { code } = ctx.request.body;
  const { openid: openId } = await userServices.getOpenId({ code });

  if (!openId) ctx.throw(400, "获取OpenId失败");

  let user = await userServices.getUser({ openId });

  if (!user) {
    const newUser = await userServices.generateUser({ openId });

    user = newUser;
  }

  ctx.body = user;
});

/**
 * @description: 测试用根据openId获取token
 */
router.post("/getToken2", async (ctx, next) => {
  const { openId } = ctx.request.body;

  let user = await userServices.getUser({ openId });

  ctx.body = user;
});

export default router;
