<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-06 14:24:59
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 17:40:57
-->
<script setup>
import { onMounted } from "@vue/runtime-core";
import { initThemes } from "./theme/index.js";
import themePrimaryList from "./theme/data/theme-data";
import themeTypeList from "./theme/data/base-colors";
import { _getLocalStore } from "./theme/util.js";
import colorColor from "./theme/business/color.js";
import color from "./theme/color.vue";
onMounted(() => {
  let local = _getLocalStore("v-theme-colors", "JSONStr"),
    state = {};
  console.log("local", local);
  state.theme = local && local.theme ? local.theme : "lightBlue";
  state.themeType = local && local.themeType ? local.themeType : "light";
  state.themeData =
    local && local.themeData ? local.themeData : themePrimaryList;
  state.baseColors =
    local && local.baseColors ? local.baseColors : themeTypeList;
  state.primaryIndex = local && local.primaryIndex ? local.primaryIndex : 1;
  initThemes(state.theme, state.themeData, colorColor, state.themeType);
});
</script>

<template>
  <color />
</template>

<style>
h4 {
  margin: 0;
}

* {
  box-sizing: border-box;
}

* {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
</style>
