import Koa from "koa";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  if (ctx.path === "/hello" && ctx.method === "POST") {
    const { answer } = ctx.request.body;

    ctx.body = {
      key: answer,
    };
  }
});

export default app;
