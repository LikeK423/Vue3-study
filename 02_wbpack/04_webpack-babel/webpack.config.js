module.exports = {
  module:{
    rules:[
      // 1.没有babel.config.js
      // {
      //   test:/\.js$/,
      //   use:{
      //     loader:"babel-loader",
      //     options:{
      //       // 1.
      //       // plugins:[
      //       //   "@babel/plugin-transform-arrow-functions",
      //       //   "@babel/plugin-transform-block-scoping"
      //       // ]
      //       // 2.
      //       presets:[
      //         "@babel/preset-env"
      //       ]
      //     }
      //   }
      // },
      // 2.有babel.config.js
      {
        test:/\.js$/,
        loader:"babel-loader"
      }
    ]
  }
}