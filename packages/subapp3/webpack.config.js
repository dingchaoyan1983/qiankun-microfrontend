const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk")

const appName = 'subapp3'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/main.ts',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    globalObject: 'window',
    publicPath: 'http://localhost:3003/'
  },
  resolve: {
    extensions: ['.vue', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      },
      {
        test: /\.module\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction ? '[local]_[hash:base64:5]' : '[local]_[hash:base64:5]'
              },
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, 'less-loader']
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction ? '[local]_[hash:base64:5]' : '[local]_[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.green("Building")} [:bar] ${chalk.green(":percent")} (:elapsed seconds)`,
      clear: false,
      width: 30,
      complete: chalk.green.bold("█"),
      incomplete: chalk.green.bold("░"),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    isProduction && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ].filter(Boolean),
  devServer: {
    port: 3003,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
