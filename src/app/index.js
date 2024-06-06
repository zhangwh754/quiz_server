import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { useRoutes } from "../controller/index.js";

const app = new Koa();

useRoutes(app);

app.use(bodyParser());

export default app;
