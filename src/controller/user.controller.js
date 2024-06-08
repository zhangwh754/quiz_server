import Router from "koa-router";
import userServices from "../services/user.services.js";

const router = new Router();

router.post("/user", async (ctx, next) => {
  const user = await userServices.getUser();
  const { name } = ctx.request.body;

  if (name == "zwh") {
    ctx.throw(400, "zwh is blocked");
  } else {
    ctx.body = user;
  }
});

export default router;
