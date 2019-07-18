const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.export = {
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: "8080"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    })
  ]
};
