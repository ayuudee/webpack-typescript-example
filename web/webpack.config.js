var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        pageA: "./entry/foo.js"
    },
    output: {
        path: path.join(__dirname, "target"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"]
    },
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    }
}
