const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/public/index.html",
    }),
  ],
};

// Defining devConfig second in merge will take priority over commonConfig configurations:: So, be sure of Order in which you merge them.
module.exports = merge(commonConfig, devConfig);
