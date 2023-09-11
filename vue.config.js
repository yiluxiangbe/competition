const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const path = require('path')

// 跨域的相关配置
module.exports = {
  // ...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.203.157.229:8080/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        views: path.resolve(__dirname, 'src/views')
      }
    }
  }
}
