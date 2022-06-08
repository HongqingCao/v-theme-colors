/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-08 16:21:19
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 16:21:20
 */

import  colorColor  from './color.js'

let varList = {
  color:colorColor,
}

// 通过路由获取 自定义
export const getRouterVar = ()=> {
  let routerVarList = ['color']
  let pathname = window.location.pathname
  let myvar = varList.color
  routerVarList.forEach(item => {
    if(pathname.search(item) > -1){
      myvar = varList[item]
    }
  })
  return myvar
}