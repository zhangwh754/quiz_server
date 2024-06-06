import app from "./src/app/index.js";
import config from "./src/app/config.js";

app.listen(config.APP_PORT, () => {
  console.log(`应用启动于： http://localhost:${config.APP_PORT}`);
});
