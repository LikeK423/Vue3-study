const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:"babel-loader"
      },
      {
        test:/\.vue$/,
        loader:"vue-loader"
      }
    ]
    
  },
  plugins:[
      new VueLoaderPlugin()
  ]
}