<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-06 14:24:59
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 17:40:57
-->
<script setup>
import { onMounted } from '@vue/runtime-core'
import color from './theme/color.vue'
import { initThemes } from './theme/index.js'
onMounted(() => {
 initThemes('lightBlue')
})
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
