const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, "./server.js"),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js'
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  target: 'node',
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
