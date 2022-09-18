const path = require("path");
const HtmlWebpackplugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
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
  plugins:[
    new HtmlWebpackplugin({
      title: "Webpack App plugin",
      filename:"index.html",
      template: path.resolve(__dirname,'public/index.html')
    })
  ]
};
