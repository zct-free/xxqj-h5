import { VantResolver } from "@vant/auto-import-resolver";
import vue from "@vitejs/plugin-vue";
import postcssPxtorem from "postcss-pxtorem";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    postcssPxtorem({
      rootValue: 43, // 430 设计稿 → 43（430/10）
      propList: ["*"], // 所有 CSS 属性都转 REM
      unitPrecision: 5, // 精度
      selectorBlackList: [], // 不转的类名
      replace: true,
      mediaQuery: false,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
