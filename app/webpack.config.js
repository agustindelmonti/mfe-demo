const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "app",
      remotes: {
        cart: "cart@http://localhost:3003/remoteEntry.js",
        products: "products@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};
