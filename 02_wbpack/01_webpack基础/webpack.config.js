// 在package.json文件里面是"build":"webpack"
// 当我们的入口文件是main.js 则package.json里面应该是"build":"webpack --entry ./src/main.js"
// 缺点：过于复杂

const path = require("path");

// 使用commonjs导出，因为webpack是在node下写的，而node想要使用ES6导出需增加额外配置
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"), //绝对路径
    filename: "bundle.js",
  },
};
