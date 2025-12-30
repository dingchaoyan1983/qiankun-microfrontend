const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `subapp4-[name]`,
      libraryTarget: 'umd',
      globalObject: 'window',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  devServer: {
    port: 3004,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3004/',
})
