import jwt from "jsonwebtoken";
import config from "../app/config.js";

// 用户是否登录中间件
export const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    ctx.throw(401, "Unauthorized");
  }
  const token = authorization.replace("Bearer ", "");
  try {
    const res = jwt.verify(token, config.PUBLIC_KEY, {
      algorithm: ["RS256"],
    });
    ctx.user = res;
    await next();
  } catch (error) {
    ctx.throw(401, "Unauthorized");
  }
};
