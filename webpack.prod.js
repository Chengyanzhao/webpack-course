const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ] // 顺序是从右到左，先执行css-loader，然后将结果传递给style-loader。
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240 // 对于小于这个限制的资源才进行base64处理。单位：字节b。
          }
        }]
      },
      {
        test: /.(woff|woff2|eot|ttf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'), // html模板
      filename: 'search.html', // 生成html文件名。
      chunks: ['search'], // 指定html需要使用哪些chunk。
      inject: true, // 是否自动注入js、css等资源到html中。
      minify: {
        html5: true,
        collapseWhitespace: true, // 是否折叠空白
        preserveLineBreaks: false, // 是否保存换行
        minifyCSS: true, // 是否压缩css
        minifyJS: true, // 是否压缩js
        removeComments: false // 是否移除注释
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'), // html模板
      filename: 'index.html', // 生成html文件名。
      chunks: ['index'], // 指定html需要使用哪些chunk。
      inject: true, // 是否自动注入js、css等资源到html中。
      minify: {
        html5: true,
        collapseWhitespace: true, // 是否折叠空白
        preserveLineBreaks: false, // 是否保存换行
        minifyCSS: true, // 是否压缩css
        minifyJS: true, // 是否压缩js
        removeComments: false // 是否移除注释
      }
    }),
    new CleanWebpackPlugin()
  ]
}
