/* 
1.局部安装vite：npm i vite -D
2.运行vite，会在本地开启一个服务： npx vite 
3.如果要使用less，需要安装less：npm i less -D
4.如果要在style属性前面加上 浏览器前缀需要先安装postcss和插件postcss-preset-env，并在postcss.config.js里面引入插件：npm i postcss -D 和 npm i postcss-preset-env -D
*/

import { sum } from "./math.js"// 也可以写成这样： import { sum } from "./math"
import "./style.css"

/*
1.无需添加后缀名，vite会自动给我们添加
2.导入第三方库时不需要手动配置路径，vite会自动给我们解析：即 "../node_modules/lodash-es/lodash.default" 可以改为 "lodash-es"
3.vite默认对css做处理(与webpack相比不需要导入css-loader,style-loader)
*/ 
console.log(sum(10,20)) 


// vite 写vue
// 1. 安装vue：npm i vue
import {createApp} from "vue";
import app from "./app.vue";
createApp(app).mount("#app")
/*
2. vite对vue的支持，在vite.config.js 进行相关配置
Vue3 单文件组件支持，安装 @vitejs/plugin-vue
Vue3 JSX支持，安装 @vite/plugin-vue-jsx
Vue2 支持，安装 underfin/vite-plugin-vue2
*/
//3.安装 npm i @vue/compiler-sfc -D

// 4.打包 npx vite build


/*
vite速度快原因之一：ESBuild
*/