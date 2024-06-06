import Koa from "koa";
import config from "./src/app/config.js";

const app = new Koa();

app.listen(config.APP_PORT, () => {
  console.log(`应用启动于： http://localhost:${config.APP_PORT}`);
});
