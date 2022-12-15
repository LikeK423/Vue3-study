const { VueLoaderPlugin } = require('vue-loader/dist/index')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  // watch:true,
  devServer:{
    // webpack-dev-server相关配置
    contentBase:"./public",
    hot:true, // 开启模块热替换（更改代码后无需刷新整个页面），如不开启则修改代码后会刷新整个页面（相当于使用live reloading）
    
  },
  target:"web"// 开启模块热替换最好也开启这个
}