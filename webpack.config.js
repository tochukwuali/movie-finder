const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv')
const webpack = require('webpack')
const DotenvWebpack = require('dotenv-webpack')

module.exports = env => {
  // // Get the root path (assuming your webpack config is in the root of your project!)
  // const currentPath = path.join(__dirname);

  // // Create the fallback path (the production .env)
  // const basePath = currentPath + "/.env";

  // // Set the path parameter in the dotenv config
  // const fileEnv = dotenv.config({ path: basePath }).parsed;

  // // reduce it to a nice object, the same as before (but with the variables from the file)
  // const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  //   return prev;
  // }, {});
  return {
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
    ],
    devServer: {
      contentBase: "./build",
      hot: true,
      historyApiFallback: true
    }
  };
};;
