import "./js/element";

// 引用css文件时打包时会报错，因为webpack不知道如何处理css
// Module parse failed: Unexpected token (1:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

// 解决：
// 1. 安装对应的loader
// 2.1 内联方式(基本上不用) ，将导入方式由 import "../css/style.css" 改为 import "css-loader!../css/style.css"
// 2.2 在webpack.config.js里面进行配置

// 但是webpack5开始就不用一个个安装loader了
// 一个配置例子
// {
//   test:/\.(jpg|jpeg|png|gif|svg)$/,
//   type:"asset",
//   generator:{
//     filename:"img/[name]-[hash:6].[ext]"
//   }
//   parser:{
//     dataUrlCondition:{
//        maxSize:100*1024
//     }
//   }
// }
