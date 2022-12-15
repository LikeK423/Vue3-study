// webpack实现自动编译
// 1.1
// 将 package.json 中 "build":"webpack " 改为 "build":"webpack --watch" （由webpack-cli处理）
// 缺点:(不使用live-server的情况下可以监听文件变化，但不能自动刷新浏览器)

// 1.2
// 在 webpack.config.js 添加 watch:true

// 2
// 安装 webpack-dev-server (npm i webpack-dev-server)
// 2.1
// 在 package.json 中添加 "serve": "webpack serve" 
// npm run serve (表面上不会对代码进行打包，实际上也是进行了打包，但没有写入文件而是把打包的文件写入内存)

// 2.2
import "./src/element" // 单纯这样导入不会做模块热替换，需要加上下面的代码
if (module.hot) {
  // 指定哪些模块发生热替换
  module.hot.accept("./src/element.js",()=>{
    console.log("element发生了热替换")
  })
}