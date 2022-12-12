const names = ["桑昆","端木元","玉磬子"];
names.forEach(item => console.log(item))

// webpack在转化时不会将ES6转化为ES5

// 如需要webpack打包时将js代码转化，则需安装 npm i babel-loader (@babel/core @babel/cli仍需提前下载)