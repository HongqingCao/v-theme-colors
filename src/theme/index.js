/*
 * @Description:
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-08 15:41:48
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 17:34:52
 */

// theme.js
import cssVars from "css-vars-ponyfill";

import { themeTypeList, themePrimaryList } from "./data/theme-data";
import { mix, hex2rgb } from "./util.js";
import { getRouterVar } from "./business/index.js";
const white = "#ffffff",
  black = "#000000";

/**
 * initThemes 全局初始化 主题
 * @param theme 主题 [必填]
 * @param tPrimaryList 主题列表[必填] array ['theme1','theme2']
 * @param valList 自定义主题列表 {val1:['theme1-color','theme2-color']} ....
 * @param themeType 主题类型  -深浅 ....
 * @param changeType 区分改的是主题类型，还是主题色 [ 预留字段 ]....
 * @returns {boolean}
 */

export const initThemes = (theme, tPrimaryList, varList, themeType) => {
  let variables = getVariables(
    theme || "lightBlue",
    tPrimaryList,
    varList,
    themeType
  );

  cssVars({
    watch: true, // 当添加，删除或修改其或元素的禁用或href属性时，ponyfill将自行调用
    variables: variables, // variables 自定义属性名/值对的集合
    onlyLegacy: true, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  });
};

//  自定义属性名/值对的集合
const getVariables = (theme, primaryList, varList, themeType) => {
  let type = themeType ? themeType : getThemeType(theme); // 获取主题的类型 深-浅
  let tPrimaryList = primaryList ? primaryList[type] : themePrimaryList[type]; // 获取深浅下对应的 主题色列表
  let C00 = getCOO(theme, tPrimaryList)[0].color; // 获取主题色
  let color = { C00: C00, ...themeTypeList[type] }; // 拼接色组

  const { dark, light } = themeTypeList; // 解耦深浅基础色

  return {
    // 功能色
    "--c-primary": color.C00, // 主题色
    "--c-primary-rgb": hex2rgb(color.C00), // 主题色RGB
    "--c-primary-hover": mix(white, color.C00, 12),
    "--c-primary-active": mix(black, color.C00, 12),
    "--c-fill-primary": mix(white, color.C00, 88), //主题色文字的背景填充色
    "--c-border-primary": mix(white, color.C00, 80), //主题色文字的边框色
    "--c-primary-mix-1": mix(white, color.C00, 10),
    "--c-primary-mix-2": mix(white, color.C00, 20),
    "--c-primary-mix-3": mix(white, color.C00, 30),
    "--c-primary-mix-4": mix(white, color.C00, 40),
    "--c-primary-mix-5": mix(white, color.C00, 50),
    "--c-primary-mix-6": mix(white, color.C00, 60),
    "--c-primary-mix-7": mix(white, color.C00, 70),
    "--c-primary-mix-8": mix(white, color.C00, 80),
    "--c-primary-mix-9": mix(white, color.C00, 90),

    "--c-success": color.C01, // 成功色
    "--c-warning": color.C01, // 警告色
    "--c-error": color.C01, // 错误色

    "--c-green": color.C06, // 语义绿 跌
    "--c-green-rgb": hex2rgb(color.C06),
    "--c-green-hover": mix(white, color.C06, 12),
    "--c-green-active": mix(black, color.C06, 12),

    "--c-red": color.C08, // 语义红 涨
    "--c-red-rgb": hex2rgb(color.C08),
    "--c-red-hover": mix(white, color.C08, 12),
    "--c-red-active": mix(black, color.C08, 12),

    "--c-yellow": color.C07, // 语义黄
    "--c-yellow-rgb": hex2rgb(color.C07),
    "--c-yellow-hover": mix(white, color.C07, 12),
    "--c-yellow-active": mix(black, color.C07, 12),

    // 文字色
    "--c-text": color.C02, // 一般文本
    "--c-text-title": color.C02, // 标题
    "--c-text-subtitle": hex2rgb(color.C02, 0.65), // 次要 - 副标题
    "--c-text-info": hex2rgb(color.C02, 0.45), // 提示
    "--c-text-placeholder": color.C02, // 占位文本色
    "--c-text-link": color.C01, // 链接文本色
    "--c-text-disable": hex2rgb(color.C02, 0.3), // 禁止或失效

    // 填充色
    "--c-fill": color.C04, // 组件默认背景颜色
    "--c-fill-body": color.C11, // 页面背景
    "--c-fill-shadow": hex2rgb(color.C11, 0.1), // 阴影
    "--c-fill-zebra": color.C05, // 斑马线色
    "--c-fill-mask": color.C11, // 遮罩背景
    "--c-fill-disable": hex2rgb(color.C02, 0.07), // 禁止

    "--c-fill-scroll": hex2rgb(color.C02, 0.5), // 滚动条色
    "--c-fill-scroll-hover": mix(white, color.C02, 12),
    "--c-fill-scroll-active": mix(black, color.C02, 12),

    // 边框/分割线颜色
    "--c-border": color.C01, // 基本边框色
    "--c-border-line": hex2rgb(color.C02, 0.07), // 分割线
    "--c-border-light": hex2rgb(color.C02, 0.12), // 浅边框色 （小边框）
    "--c-border-lighter": hex2rgb(color.C02, 0.07), // 更浅色
    "--c-border-disable": hex2rgb(color.C02, 0.04), // 禁用边框

    // 图标色
    "--c-icon": hex2rgb(color.C02, 0.65),
    "--c-icon-hover": color.C09,
    "--c-icon-active": color.C01,
    "--c-icon-down": color.C10,

    // 标签色
    // ...getTabColor(color),

    // 自定义业务-写在全局变量
    // 主题变量color.vue
    "--color-yanqi-test": mergeColor(
      ["#444", "#666"],
      ["#444", "#666"],
      type,
      theme,
      tPrimaryList
    ), // （1）完全自定义常量多态，一种主题色对应一种颜色
    "--color-chq-test": mergeColor([dark.C01], [light.C02], type), // （2）只和深浅相关自定义常量多态，只和深浅基础色有关的颜色

    // 业务自定义- 写在业务方变量
    //由主题切换的时候，动态传入入的 自定义常量列表 varList
    ...getBusinessVars(theme, type, varList, tPrimaryList),
  };
};

/**
 * initOnlyDomThemes 挂载在具体业务页面 DOM id, 支持自定义 主题常量对应一对多 方法
 * @param id  页面dom节点 #id
 * @param theme 主题
 * @param themesList 主题列表 array ['theme1','theme2']
 * @param valList 主题列表 {val1:['theme1-color','theme2-color']} ....
 * @returns {boolean}
 */

export const initOnlyDomThemes = (
  id,
  theme,
  themesList,
  valList,
  themeType
) => {
  let index = 0; // 得到一个 主题的index
  let type = themeType ? themeType : getThemeType(theme);
  let keys = Object.keys(valList);
  themesList.forEach((item, index1) => {
    if (item == theme) {
      index = index1;
    }
  });

  let variables = {};
  keys.forEach((item) => {
    variables[item] = valList[item][type][index];
  });

  cssVars({
    watch: true, // 当添加，删除或修改其或元素的禁用或href属性时，ponyfill将自行调用
    variables: variables, // variables 自定义属性名/值对的集合
    onlyLegacy: true, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
    rootElement: document.querySelector(id),
    shadowDOM: true,
  });
};

// 计算标签颜色组
const getTabColor = (color) => {
  let list = {};
  for (let i = 1; i < 11; i++) {
    let key = i < 10 ? "--c-tab-0" + i : "--c-tab-" + i;
    let val = i < 10 ? "T0" + i : "T" + i;
    let valc = color[val];
    let colorList = {};
    colorList[key] = valc;
    colorList[key + "-rgb"] = hex2rgb(valc);
    colorList[key + "-hover"] = mix(white, valc, 12);
    colorList[key + "-active"] = mix(black, color[val], 12);
    colorList[key + "-fill"] = mix(white, valc, 88);
    list = Object.assign(list, colorList);
  }
  return list;
};

const getCOO = (theme, primaryList) => {
  return primaryList.filter((item) => item.theme == theme);
};

const colorType = {
  dark: ["Black", "dark", "black", "Dark"],
  light: ["White", "white", "light", "Light"],
};

const getThemeType = (theme) => {
  let result = "dark";
  Object.keys(colorType).forEach((item) => {
    colorType[item].forEach((item1) => {
      if (theme.search(item1) > -1) {
        result = item;
      }
    });
  });

  return result;
};

// 获取业务组件的自定义vars
const getBusinessVars = (theme, type, list, tPrimaryList) => {
  let myList = list ? list : getRouterVar(); // 如果没有传list手动传了，通过路由动态获取
  let keys = Object.keys(myList),
    index = getThemeIndex(theme, tPrimaryList);

  let vars = {};
  keys.forEach((item) => {
    vars[item] = myList[item][type][index];
  });
  return vars;
};

/**
 * mergeColor 获取在当前主题下该变量（自定义）的颜色
 * @param darkList [必填]  自定义常量在不同主题下的 深色系颜色列表   array ['theme1','theme2']
 * @param lightList [必填]  自定义常量在不同主题下的 浅色系颜色列表   array ['theme1','theme2']
 * @param type 主题类型  深 - 浅
 * @param theme 主题色-名
 * @param tPrimaryList 主题列表
 * @returns {boolean}
 */

const mergeColor = (darkList, lightList, type, theme, tPrimaryList) => {
  let colorList = type == "dark" ? darkList : lightList;
  let color = colorList[0],
    index = 0;
  // 如果 type 有值说明 该自定义主题常量，只和深浅基础色 （两种）有关
  if (!theme) {
    color = type == "dark" ? darkList[0] : lightList[0];
  } else {
    // 否则认为是 一种主题 一种色值
    index = getThemeIndex(theme, tPrimaryList);
    color = colorList[index];
  }
  return color;
};

// 获取 主题的 index
const getThemeIndex = (theme, tPrimaryList) => {
  let index = 0;
  tPrimaryList.forEach((item, index1) => {
    if (item.theme == theme) {
      index = index1;
    }
  });
  return index;
};

// 对外暴露方法
export const themeMethods = {
  getVariables: getVariables,
};
