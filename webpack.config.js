const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv').config({path: __dirname + '/.env'})
const webpack = require('webpack')

module.exports = {
     mode: "development",
     entry: path.resolve(__dirname, "./src/index.js"),
     output: {
     filename: "bundle.js",
     path: path.resolve(__dirname, "dist"),
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
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
        exclude: /node_modules/
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
      "process.env": JSON.stringify((dotenv.parsed))
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true
  }
  
};
