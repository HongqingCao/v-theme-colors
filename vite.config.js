/*
 * @Description:
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-06 14:24:59
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 17:22:18
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
