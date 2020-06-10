## Vue 前端开发技术栈

vue + vuex + vue-router + axios + element-ui + less

### 1. vue

Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。  
Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。  
另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
其他框架对比：React, Angular。

当前版本：2.6.6  
官方网站：https://cn.vuejs.org/v2/guide/  
代码仓库：https://github.com/vuejs/vue

### 2. vuex

vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。  
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。  
用过 react 开发的，那么它类似于 redux。

当前版本：3.1.0  
官方网站：https://vuex.vuejs.org/zh/  
代码仓库：https://github.com/vuejs/vuex

### 3. vue-router

vue-router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

当前版本：3.0.2  
官方网站：https://router.vuejs.org/zh/  
代码仓库：https://github.com/vuejs/vue-router/

### 4. axios

axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。  
向后端发送 http 请求，可以实现请求的统一封装和错误拦截等。  
还有类似的 fetch，也可以了解一下。

当前版本：0.18.0  
中文文档：  
https://www.jianshu.com/p/7a9fbcbb1114  
https://www.kancloud.cn/yunye/axios/234845  
代码仓库：https://github.com/axios/axios

### 5. element-ui

element-ui 是一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。  
它不依赖于 vue，但是却是当前和 vue 配合做项目开发的一个比较好的 ui 框架。

当前版本：2.5.4  
官方网站：http://element-cn.eleme.io/#/zh-CN/component/installation  
代码仓库：https://github.com/ElemeFE/element

### 6. less

Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。  
Less 可以运行在 Node 或浏览器端。  
类似的还有 Sass 、Stylus。

参考网站：  
http://lesscss.cn/  
https://segmentfault.com/a/1190000012360995?utm_source=tag-newest

### 7. 其他

以下是辅助类工具，非重点掌握技术，但有必要了解。

#### (1) vue cli

Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统。构建 vue 项目的脚手架。

#### (2) babel

Babel 是一个 JavaScript 编译器，也是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码
当前版本已经到了 babel 7
参考网站：https://babel.docschina.org/docs/en/

#### (3) eslint

ESLint 是一个语法规则和代码风格的检查工具。用来规范代码。

#### (4) vue-devtools

借助 vue-devtools 插件，我们就可以很容易的对数据结构进行解析和调试。可通过谷歌浏览器网上商店搜索安装该插件。

#### (5) 单元测试

jest、mocha，项目中还没有使用过类似的单元测试工具，需要研究一下。  
参考网站：https://cn.vuejs.org/v2/guide/unit-testing.html

---

Tip: 推荐使用 VS Code 开发工具，它是一个开源的、基于 Electron 的轻量代码编辑器。内置很多插件，可根据需要扩展。  
快捷键：https://blog.csdn.net/p358278505/article/details/74221214  
下载地址：https://code.visualstudio.com/Download
