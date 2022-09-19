const path = require("path");
const HtmlWebpackplugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js", // for caching
    clean:true, //so that more hash files are not generated for the same file if something chnages
    assetModuleFilename: "[name][ext]" // so that name remains same after build
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
  resolve:{
    extensions: ['.js','.jsx','.ts','.tsx'] // to import files without extension
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: {
          loader:'babel-loader',
          options:{
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // importing images
        type: 'asset/resource',
      },
    ],
  },
  plugins:[
    new MiniCssExtractPlugin(), // to create new css file
    new HtmlWebpackplugin({
      title: "Webpack App plugin",
      filename:"index.html",
      template: path.resolve(__dirname,'public/index.html') // to pick file from this 
    })
  ]
};
