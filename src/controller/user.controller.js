import Router from "koa-router";
import userServices from "../services/user.services.js";

const router = new Router();

router.post("/user", async (ctx, next) => {
  const { name } = ctx.request.body;

  const user = await userServices.getUser({ name });

  ctx.body = user;
});

export default router;
