module.exports = {
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
      }
    ]
  }
}
