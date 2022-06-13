![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01d667dbf90b4063ba64889f859dea5c~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)
<h3 align="center">基于css-vars-ponyfill插件用纯JS编写换肤核心功能</h3>

<p align="center">
  <a href="">
    更新日志
  </a>
  <span> | </span>
  <a>
    中文
  </a>
</p>


- 纯JS实现，对外暴露initThemes初始化方法，不依赖CSS预处理器（sass和less），兼容ie9  
- 抽离深浅色系基础色（统一治理输出），以及主题色，混合颜色（黑白色）都可以动态接口获得  
- 统一规范业务色常量命名，JS定义自定义函数方法 1、 Mix函数实现媲美sass的颜色混合机制，2、十六进制和RGB（rgba）互相转换函数  
- 技术路线不抖，直接用var()函数使用，后期封装成JS库 ，皮肤配置中台，可以提供给各个团队使用  
- 关于业务自定义变量，设计有两个治理方案：（1）全局变量， 全局单独维护（2）局部业务变量，局部单独维护  


#### 更新日志

 | 序号 | 时间 | 功能 | 功能   | 描述 |
| --- | --- | --- |--- | --- |
|0| 2022-06| init |开发中|主题设置|
|1| 2022-06 | 优化 | 已完成 | 完成基础设置

#### 贡献
 有兴趣的同学可以切一个分支（以您的github账号命名分支），发起 pull request 


#### （1）项目目录  
> 测试页面由 vite-vue3构建  
 
```bash

├── src                                // 前端源代码
│   ├── theme                          // 主题核心代码
│   ├────├── business                  // 测试业务变量
│   ├────├── data                      // 主题相关数据
│   ├────├─────├── base-colors.js      // 基础色
│   ├────├─────└── theme-data.js       // 主题色
│   ├────├── color.vue                 // 测试页面
│   ├────├── index.js                  // 核心代码
│   ├────└──  util.js                  // 工具函数
├── package.json                       // package.json
├── .gitignore                         // git 忽略项
└── vite.config.js                     // vite
```
#### （2）项目运行介绍
我们看到 `package.json`文件
```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
```

> npm i   安装依赖  
> npm run dev 启动



## License

[MIT](http://opensource.org/licenses/MIT)
