import Router from "koa-router";
import { verifyAuth } from "../middlewares/auth.middlewares.js";
import userController from "../controller/user.controller.js";

const router = new Router();

/**
 * @description: 解析jwt返回user信息
 */
router.post("/user", verifyAuth, userController.getUser);

export default router;
