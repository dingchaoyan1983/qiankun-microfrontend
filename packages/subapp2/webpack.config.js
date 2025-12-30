const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk")
const { QiankunModuleFederationPlugin } = require('qiankun-module-federation-plugin')
const packageJson = require("./package.json")
const mfConfig = require("./module-federation.config").default

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: "./src/main.tsx"
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    library: `${packageJson.name}-[name]`,
    libraryTarget: 'umd',
    globalObject: 'window',
    publicPath: 'http://localhost:3002/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
          }
        }
      },
      {
        test: /\.module\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProduction ? '[local]_[hash:base64:5]' : '[local]_[hash:base64:5]'
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, 'less-loader']
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
      clear: true,
      width: 30,
      complete: chalk.green.bold("█"),
      incomplete: chalk.green.bold("░"),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: [packageJson.name, 'app'],
      chunksSortMode: "manual"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    isProduction && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new QiankunModuleFederationPlugin(mfConfig),
  ].filter(Boolean),
  devServer: {
    port: 3002,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  watchOptions: {
    ignored: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.git/**',
      '**/build/**',
      '**/*.test.tsx',
      '**/*.spec.tsx',
      '**/*.test.ts',
      '**/*.spec.ts',
      '**/@mf-types/**'
    ],
    aggregateTimeout: 300,
    poll: false
  }
}
