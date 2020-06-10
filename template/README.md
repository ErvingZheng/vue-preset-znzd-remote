# PLM-znzd-rdms

## 工程结构说明

    |--dist // 生产环境打包生成的文件
    |--docs // 说明文档存放位置
    |--public // 入口文件
    |--src  // 源码根目录
    |   |--api // http请求接口存放位置
    |   |--assets // 图片等资源存放位置
    |   |--components // 公共组件
    |   |--router    // 总路由配置文件
    |   |--store    // vuex数据状态管理
    |   |--styles    // css样式存放位置
    |   |    |--iconfont // 字体图标
    |   |    |--index.less // 样式主文件
    |   |--utils    // 通用函数等
    |   |    |--codeMsg.js // 常用请求错误代号
    |   |    |--index.js // 常用的函数集合
    |   |    |--request.js // axios请求封装
    |   |--views    // 公共视图界面代码存放位置
    |   |--App.vue    // app外层框架
    |   |--main.js    // 创建vue实例
    |   |--sys_xxx    // 系统模块 xxx根据实际名称定义
    |   |    |--components // 该模块的公共组件
    |   |    |--views // 该模块的视图界面代码存放位置
    |   |    |--routes.js // 该模块的路由配置
    |--.eslintrc.js  // eslint配置文件
    |--babel.config.js  // babel配置文件
    |--package.json  // node模块包依赖
    |--postcss.config.js  // css解析配置文件
    |--vue.config.js  // 项目自定义配置文件

## Project setup （启动项目，安装依赖）

```
npm install
```

### Compiles and hot-reloads for development （开发环境热更新）

```
npm run serve
```

### Compiles and minifies for production （生产环境压缩打包）

```
npm run build
```

### Lints and fixes files （代码格式化）

```
npm run lint
```

### Run your end-to-end tests （e2e 端到端测试）

```
npm run test:e2e
```

### Run your unit tests （单元测试）

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
