import mysql from "mysql2";
import config from "./config.js";

// 创建一个数据库连接
const connection = mysql.createPool({
  host: config.host,
  port: config.SQL_PORT,
  user: config.SQL_USER,
  database: config.SQL_DATABASE,
  password: config.SQL_PASSWORD,
  connectionLimit: config.SQL_CONNECTION_LIMIT,
});

connection.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("连接失败: ", err);
    } else {
      console.log("连接数据库成功");
    }
  });
});

export default connection.promise();
