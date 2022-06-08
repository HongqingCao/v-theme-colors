/*
 * @Description: 存放主题相关的数据：（1）深浅色调主题数据 （2）深浅色调基础色
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-08 15:47:36
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 17:37:57
 */

import dark from './base-colors-dark'
import light from './base-colors-light'

// 深浅色调 衍生的主题数据 
export const themePrimaryList = {
  dark: [
    {
      color: '#FCCA6A',
      name: '深黄',
      theme: 'darkYellow'
    },
    {
      color: '#256DFF',
      name: '深蓝',
      theme: 'darkBlue'
    },
  ],
  light: [
    {
      color: '#FFAA0E',
      name: '浅黄',
      theme: 'lightYellow'
    },
    {
      color: '#81ADFF',
      name: '浅蓝',
      theme: 'lightBlue'
    }
  ]
}

// 深浅色调基础色
export const themeTypeList = {
  dark: dark,
  light: light,
}