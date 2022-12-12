// 开发中，要想使用ES6的语法、TS和开发React项目都离不开Babel
// babel本身可以作为一个独立工具，不和webpack等构建工具配置来单独使用（需先安装@babel/core 和 @babel/cli , 这两个是babel能够转化的前提）
// Babel编译器的作用是将我们的源代码转换成浏览器可以识别的源代码
// Babel工作流程：解析阶段->转换阶段->生成阶段

// npm i @babel/core @babel/cli

// 1. 示例代码
const names = ["桑昆","端木元","玉磬子"];
names.forEach(item => console.log(item))

// 2.运行 npx babel demo.js --out-dir dist 结果：与该文件一模一样
  
// 3.先转换箭头函数,安装 npm i @babel/plugin-transform-arrow-functions

// 4.运行 npx babel demo.js --out-dir dist --plugins=@babel/plugin-transform-arrow-functions 结果：箭头函数成功转化

// 5.转换const和let,安装 npm i @babel/plugin-transform-block-scoping

// 6.运行 npx babel demo.js --out-dir dist --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping 结果：const和let转换为var

// 7.每个ES6语法安装对应插件过于麻烦，因此babel有preset(预设)(已经内置了各种插件),安装:npm i @babel/preset-env

// 8.运行：npx babel demo.js --out-dir dist --presets=@babel/preset-env