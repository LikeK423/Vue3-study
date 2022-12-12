/*
vue也是有不同版本的
1.vue.global.js
    在浏览器中直接使用，html通过cdn引用的就是这个版本
2.vue.esm-browser.js
    用于通过原生的ES模块导入，html中通过<script type="module"></script>使用
3.vue.esm-bundler.js
    用于webpack等构建工具
4.vue.cjs.js
    服务器端渲染使用，通过require在Node中使用
*/ 

import { createApp } from 'vue/dist/vue.esm-bundler'
// const app = createApp({
//   template:'<h1>Hello World</h1>'
// });


import App from './vue/app.vue'
const app = createApp(App);
// 安装 npm i vue-loader @vue/compiler-sfc 后webpack才能打包

app.mount('#app')