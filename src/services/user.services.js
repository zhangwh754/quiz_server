import config from "../app/config.js";
import connection from "../app/database.js";

class UserServices {
  constructor() {}

  async generateUser({ openId }) {
    const statement = `
      INSERT INTO Users (openId)
      VALUES (?);
    `;

    await connection.query(statement, [openId]);

    const res = await this.getUser({ openId });

    return res;
  }

  /**
   * @description: 前往腾讯服务器换取openId
   * @param {*} code
   */
  async getOpenId({ code }) {
    const params = {
      appid: config.WECHAT_APP_ID,
      secret: config.WECHAT_APP_SECRET,
      js_code: code,
      grant_type: "authorization_code",
    };

    const queryString = new URLSearchParams(params).toString();

    const res = await fetch(
      "https://api.weixin.qq.com/sns/jscode2session?" + queryString
    ).then((res) => res.json());

    return res;
  }

  async getUser({ openId, name }) {
    let result;

    if (openId) {
      const [res] = await connection.query(
        `
        SELECT
          user_id, nickname, avatar, created_at
        FROM Users
        WHERE openId = ?;
        `,
        [openId]
      );
      result = res;
    }

    return result[0];
  }
}

export default new UserServices();
