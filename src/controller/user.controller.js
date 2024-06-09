import Router from "koa-router";
import userServices from "../services/user.services.js";
import { verifyAuth } from "../middlewares/auth.middlewares.js";

const router = new Router();

router.post("/user", verifyAuth, async (ctx, next) => {
  ctx.body = ctx.user;
});

export default router;
