/*
 * @Description: 公共的变量(预留自定义可视化配置颜色)
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-09 13:53:03
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-09 14:24:43
 */

export default [
  {
    name: "--c-text-01", // 变量名
    type: "base", // 基础色-base, 色系相关-colour, 自定义-userDefined
    base: "", // 如果是基础色，记录基础色的顺序
    calc: "", // 计算  rgba   混合 mix
    weight: 1, // rgba 混合比例
    dark: [], // 深色系值
    light: [], // 深色系值
    des: "", // 描述
  },
];
