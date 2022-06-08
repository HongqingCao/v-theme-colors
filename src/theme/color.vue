<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-08 15:47:09
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 17:43:16
-->

<template>
  <div class="color-warpper" id="color-warpper">
    <div class="left">
      <h2 class="color-se-cai">Color 色彩</h2>
      <p>
        为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受
      </p>
      <div class="deom-item">
        <h3 class="zhu-se">系统色系</h3>
        <div class="them-item">
          <div class="them-list" v-for="item in systemList" :key="item.color">
            <div
              @click="change(item.theme, 'themeType')"
              class="them"
              :class="[item.theme == themeType ? 'active' : '']"
              :style="{ background: item.color }"
            >
              <span v-if="item.theme == themeType">✔</span>
              <h4>{{ item.name }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="deom-item">
        <h3 class="zhu-se">主题主色列表</h3>
        <div class="them-item">
          <div
            class="them-list"
            v-for="(item, index) in themePrimaryList[themeType]"
            :key="item.color"
            @click="change(item.theme, 'themePrimary', index)"
          >
            <h4>{{ item.name }}</h4>
            <div
              class="color"
              :class="[item.theme == theme ? 'active' : '']"
              :style="{ background: item.color }"
            ></div>
          </div>
          <div class="them-list">
            <div class="color add">+添加</div>
          </div>
        </div>
      </div>
      <div class="deom-item">
        <h3 class="zhu-se">系统色系基础色</h3>
        <div class="them-item">
          <div
            class="them-list"
            v-for="(item, index) in comColorList"
            :key="item"
          >
            <el-color-picker v-model="comColorList[index]" />
            <h4>{{ item }}</h4>
          </div>
        </div>
      </div>

      <div class="deom-item">
        <h3 class="zhu-se">主色</h3>
        <p class="info">主要品牌颜色是鲜艳</p>
        <div class="deom-list">
          <div class="color-item">
            <div
              class="demo-color-box"
              :style="{ background: variables['--c-primary'] }"
            >
              <div class="title">主题色</div>
              <div class="color">
                --c-primary: {{ variables['--c-primary'] }}
              </div>
              <div class="rgba">
                --c-primary-rgb: {{ variables['--c-primary-rgb'] }}
              </div>
              <div class="hover">
                --c-primary-hover: {{ variables['--c-primary-hover'] }}
              </div>
              <div class="active">
                --c-primary-active: {{ variables['--c-primary-active'] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="deom-item deom-flex">
        <div class="list">
          <h3 class="zhu-se">测试多态-局部自定义色常量</h3>
          <p class="info"></p>
          <div class="deom-list">
            <div class="color-item duotai">我测试多态颜色</div>
          </div>
        </div>
        <div class="list">
          <h3 class="zhu-se">测试多态-全局自定义色常量</h3>
          <p class="info"></p>
          <div class="deom-list">
            <div class="color-item yanqi">我测试多态颜色</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="color-list">
        <div
          class="list-item"
          v-for="item in Object.keys(variables)"
          :Key="item"
        >
          <div class="name">{{ item }}</div>
          <div class="value">{{ variables[item] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { ElColorPicker } from 'element-plus'
import { reactive, toRefs, computed } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

import { themeTypeList, themePrimaryList } from './data/theme-data.js'
import { initThemes, themeMethods, initOnlyDomThemes } from './index.js'

import dark from './data/base-colors-dark.js'
import light from './data/base-colors-light.js'
import colorColor from './business/color.js'

export default {
 // components: { ElColorPicker },
  setup() {
    const state = reactive({
      theme: 'lightBlue',
      primaryIndex: 1,
      themeType: 'light',
      variables: {},
      varKeyS: [],
      comColorList: light,
      systemList: [
        {
          name: '深色',
          color: '#202020',
          theme: 'dark',
        },
        {
          name: '浅色',
          color: '#D4D2CE',
          theme: 'light',
        },
      ],
    })

    state.variables = computed(() => {
      return themeMethods.getVariables(
        state.theme,
        themePrimaryList,
        colorColor
      )
    })

    const change = (theme, type, index) => {
      if (type == 'themeType') {
        state.themeType = theme
        state.comColorList = theme == 'light' ? light : dark
        state.theme = themePrimaryList[theme][state.primaryIndex].theme
      } else {
        state.theme = theme
        state.primaryIndex = index
      }
      
      initThemes(state.theme, themePrimaryList, colorColor, state.themeType)
      myinitOnlyDomThemes(theme)
    }

    const myinitOnlyDomThemes = (theme) => {
      // 测试 本地自定义一对多变量模式
      let valList = {
        '--c-caohq-color-text': {
          dark: ['#FFAA0E', '#FF4650'],
          light: ['#FFAA0E', '#FF4650'],
        },
      }

      initOnlyDomThemes(
        '#color-warpper',
        theme,
        ['darkBlue', 'lightBlue'],
        valList,
        state.themeType
      )
    }

    onMounted(() => {
      myinitOnlyDomThemes('darkBlue')
    })
    return {
      ...toRefs(state),
      themeList: themeTypeList,
      themePrimaryList: themePrimaryList,
      change,
    }
  },
}
</script>

<style lang="scss" scoped>
.color-warpper {
  background: var(--c-fill-body);
  color: var(--c-text);
  padding: 20px;
  .left {
    width: calc(100% - 300px);
    .color-se-cai {
      font-weight: 400;
      font-size: 28px;
    }
    .deom-item {
      .zhu-se {
        margin: 55px 0 20px;
      }
      .them-item {
        display: flex;
        flex-wrap: wrap;
        .them-list {
          margin-right: 6px;
          text-align: center;
          .them {
            color: var(--c-fill-mask);
            padding: 5px;
            width: 100px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
          }
          .color {
            width: 80px;
            height: 60px;
          }
          .active {
            border: 1px solid var(--c-red);
            color: var(--c-primary-active);
          }
          .add {
            margin-top: 21px;
            text-align: center;
            line-height: 60px;
            border: 1px solid var(--c-border);
            cursor: pointer;
          }
        }
      }
      .info {
        color: var(--c-text-subtitle);
        line-height: 32px;
      }
      .deom-list {
        display: flex;
        .color-item {
          height: 150px;
          width: 220px;
          margin-right: 20px;
          .demo-color-box {
            border-radius: 4px;
            padding: 10px;
            position: relative;
            box-sizing: border-box;
            font-size: 12px;
            width: 100%;
            height: 100px;
          }
        }
        .duotai {
          background-color: var(--c-caohq-color-text);
          color: var(--c-primary);
        }
        .yanqi {
          background-color: var(--yanqi-body);
        }
      }
    }
    .deom-flex {
      display: flex;
    }
  }
  .right {
    background: var(--c-fill-body);
    width: 300px;
    height: 100%;
    .color-list {
      position: absolute;
      z-index: 999;
      right: 0;
      top: 20px;
      width: 300px;
      height: 500px;
      overflow: scroll;
      font-size: 12px;
      .list-item {
        display: flex;
        line-height: 20px;
        border: 1px solid var(--c-border);
        border-bottom: 0px;
        &:last-child {
          border-bottom: 1px solid var(--c-border);
        }
        .name {
          width: 50%;
          border-right: 1px solid var(--c-border);
          padding-left: 6px;
        }
        .value {
          width: 50%;
          padding-left: 6px;
        }
      }
    }
  }
}
</style>