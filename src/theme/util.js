/*
 * @Description: 工具函数
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2022-06-08 15:46:16
 * @LastEditors: codercao
 * @LastEditTime: 2022-06-08 16:29:57
 */

/**
 * mix 颜色混合 规则符合 sass - mix
 * @param color_1 颜色1
 * @param color_2 颜色2
 * @param weight 比例 （80% 传80）
 * @returns {string}
 */

export const mix = (color_1, color_2, weight) => {
  let c1 = color_1.replace(/#/g, ""),
    c2 = color_2.replace(/#/g, "");

  // 将十进制值转换为十六进制
  function d2h(d) {
    return d.toString(16);
  }

  // 将十六进制值转换为十进制
  function h2d(h) {
    return parseInt(h, 16);
  }

  // 如果省略该参数，则将权重设置为50%
  weight = typeof weight !== "undefined" ? weight : 50;

  var color = "#";
  // 循环-红，绿，蓝
  for (var i = 0; i <= 5; i += 2) {
    var v1 = h2d(c1.substr(i, 2)),
      v2 = h2d(c2.substr(i, 2)),
      // 根据指定的权重将来自每个源颜色的当前对组合起来,四舍五入
      val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));

    // 如果val结果是单个数字，则在前面加上一个'0'
    while (val.length < 2) {
      val = "0" + val;
    }

    color += val;
  }

  return color;
};

/**
 *   rgb2hex (rgb 转 十六进制)
 * @param rgb 颜色
 * @returns {string}
 */

export const rgb2hex = (rgb) => {
  var rgb = color.split(",");
  var r = parseInt(rgb[0].split("(")[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(")")[0]);
  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
};

/**
 *   rgba2hex ( rgba 转 十六进制)
 * @param rgb 颜色
 * @returns {string}
 */

export const rgba2hex = (rgb) => {
  var values = color
    .replace(/rgba?\(/, "")
    .replace(/\)/, "")
    .replace(/[\s+]/g, "")
    .split(",");
  var a = parseFloat(values[3] || 1),
    r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
    g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
    b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
  return (
    "#" +
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2)
  );
};

//

/**
 *   hex2rgb ( 十六进制 转 rgb)
 * @param rgb 颜色
 * @returns {string}
 */

export const hex2rgb = (hex, weight) => {
  // 十六进制颜色值的正则表达式
  var reg = new RegExp("^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$");
  //  16进制颜色转为RGB格式
  let color = hex ? hex.toLowerCase() : hex;
  if (color && reg.test(color)) {
    if (color.length === 4) {
      var colorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    //  处理六位的颜色值
    var colorChange = [];
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }

    if (weight) {
      return "rgba(" + colorChange.join(",") + "," + weight + ")";
    }

    return colorChange.join(",");
  } else {
    return color;
  }
};
