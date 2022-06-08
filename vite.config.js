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
//import styleImport from "vite-plugin-style-import";
// import vitePluginImport from "vite-plugin-babel-import";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'element-plus',
    //     esModule: true,
    //     ensureStyleFile: true,
    //     resolveStyle: (name) => {
    //       name = name.slice(3);
    //       return `element-plus/packages/theme-+halk/src/${name}.scss`
    //     },
    //     resolveComponent: (name) => `element-+lus/lib/${name}`
    //   }]
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
