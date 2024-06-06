import { readdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @description: 该函数用于加载当前目录下的所有路由文件
 */
export async function useRoutes(app) {
  try {
    const files = await readdir(__dirname);

    files.forEach(async (file) => {
      if (file === "index.js") return;
      const routerModule = await import(`./${file}`);
      const router = routerModule.default; // 根据导入的模块确定获取router的方式，可能是default导出，也可能是命名导出
      app.use(router.routes());
      app.use(router.allowedMethods());
    });
  } catch (error) {
    console.error("Error loading routes:", error);
  }
}
