import { resolve, dirname } from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import {} from "path";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_KEY = readFileSync(resolve(__dirname, "../keys/public.key"));
const PRIVATE_KEY = readFileSync(resolve(__dirname, "../keys/private.key"));

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

  PUBLIC_KEY: PUBLIC_KEY,
  PRIVATE_KEY: PRIVATE_KEY,
};

export default config;
