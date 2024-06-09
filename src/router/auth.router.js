import Router from "koa-router";
import authController from "../controller/auth.controller.js";

const router = new Router();

/**
 * @description: 根据code获取token，用户不存在自动注册
 */
router.post("/getToken", authController.getToken);

/**
 * @description: 测试用根据openId获取token
 */
router.post("/getToken2", authController.getToken2);

export default router;
