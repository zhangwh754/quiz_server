import "dotenv/config";

const env = process.env;

const config = {
  APP_PORT: env.APP_PORT,

  SQL_HOST: env.SQL_HOST,
  SQL_PORT: env.SQL_PORT,
  SQL_USER: env.SQL_USER,
  SQL_PASSWORD: env.SQL_PASSWORD,
  SQL_DATABASE: env.SQL_DATABASE,
  SQL_CONNECTION_LIMIT: env.SQL_CONNECTION_LIMIT,

  WECHAT_APP_ID: env.WECHAT_APP_ID,
  WECHAT_APP_SECRET: env.WECHAT_APP_SECRET,
};

export default config;
