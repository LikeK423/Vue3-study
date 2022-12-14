const path = require('path')
const {
  CleanWebpackPlugin // 在打包时将dist文件夹以前的文件删除
} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"), //绝对路径
    filename: "bundle.js",
  },
  module:{
    rules:[
      {
        test:/\.css$/,// 正则表达式
        // 1.loader写法（语法糖）
        // loader:"css-loader",

        // 2.use简便写法,后面跟上数组（有些可能一个loader搞不定）
        use:[
          "style-loader",// 后加载 // 将解析之后的css插入页面
          "css-loader"// 先加载  // 需要自己下载,只负责解析 .css 文件，不会将解析之后的css插入页面
        ]

        // 3.完整写法
        // use:[
        //   {loader:"css-loader"}
        // ]
      },
      {
        test:/\.less$/,// 处理less文件
        use:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // {
      //   test:/\.(jpg|jpeg|png|gif|svg)$/,
      //   use:{
      //     loader:"file-loader",
      //     options:{
      //       name:"img/[name]-[hash:6].[ext]"
      //     }
      //   }
      // },
      {
        test:/\.(jpg|jpeg|png|gif|svg)$/,
        use:{
          loader:"url-loader",
          options:{
            name:"img/[name]-[hash:6].[ext]",
            limit:100*1024 // 小于100kb的图片就进行base64编码
          }
        }
      },
      {
        test:/\.(eot|ttf|woff2?)$/,// 处理字体文件
        use:{
          loader:"file-loader",
          options:{
            name:"font/[name]_[hash:6].[ext]"
          }
        }
      }
    ]
  },
  plugins:[
    // 这里面放插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
}
