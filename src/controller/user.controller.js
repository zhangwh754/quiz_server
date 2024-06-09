import Router from "koa-router";
import userServices from "../services/user.services.js";

const router = new Router();

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

export default router;
