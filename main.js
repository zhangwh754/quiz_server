import Koa from "koa";
import "dotenv/config";

const app = new Koa({
  proxy: true,
});

app.use(async (ctx) => {
  ctx.body = {
    msg: "Hello World",
  };
});

app.listen(process.env.PORT, () => {
  console.log(`应用启动于： http://localhost:${process.env.PORT}`);
});
