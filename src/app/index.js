import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { useRoutes } from "../router/index.js";
import * as middlewares from "../middlewares/index.js";

const app = new Koa();

useRoutes(app);

app.use(bodyParser());
app.use(middlewares.responseHandle());
app.use(middlewares.errorHandle());

export default app;
