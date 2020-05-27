const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv').config({path: __dirname + '/.env'})
const webpack = require('webpack')
const DotenvWebpack = require('dotenv-webpack')

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "App.css",
      chunkFilename: "App.css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        'NODE_ENV': JSON.stringify(dotenv.parsed)
      }
    }),
    new DotenvWebpack({
      path: './.env'
    })
  ],
  devServer: {
    contentBase: "./build",
    hot: true,
    historyApiFallback: true
  }
};
