import Router from "koa-router";
const router = new Router();

router.get("/hello", (ctx, next) => {
  ctx.body = {
    key: "hello koa-router",
  };
});

router.post("/hello", (ctx, next) => {
  const { name } = ctx.request.body;

  ctx.body = {
    key: name,
  };
});

export default router;
