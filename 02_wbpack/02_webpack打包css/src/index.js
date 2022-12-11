import "./js/element"

// 打包时会报错，因为webpack不知道如何处理css
// Module parse failed: Unexpected token (1:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

// 1. npm install css-loader -D
// 2.1 内联方式(基本上不用) ，将导入方式由 import "../css/style.css" 改为 import "css-loader!../css/style.css"
// 2.2 在webpack.config.js里面进行配置