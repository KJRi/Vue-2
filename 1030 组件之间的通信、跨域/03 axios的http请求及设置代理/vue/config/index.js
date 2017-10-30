
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 设置服务器代理：服务器之间访问，没有跨域的限制
    proxyTable: {
      // 将请求地址为以 /user 开头的请求都转发到 target所指的服务器中
      '/user':{
        // 目标地址
        target:'http://127.0.0.1:3000',
        // changeOrigin 为true的时候，本地会虚拟一个服务端接受你的请求并代理发送该请求，可以实现跨域请求（服务端之间没有跨域限制）
        changeOrigin:true,
        // 地址中的 /user 仅仅是一个请求转发标志，真正的接口中没有/user，所以在转发是 /user 要被删掉
        pathRewrite:{
          '^/user':''
        }
      },
      '/douyuapi':{
        target:'http://open.douyucdn.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/douyuapi':''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
