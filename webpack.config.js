const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer:{
    static:{
        directory: path.resolve(__dirname,'dist')
    },
    port:3000,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader','sass-loader']
      },
    ],
  },
};
