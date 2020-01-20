const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []

  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))

  Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1]
    entry[pageName] = entryFile

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`, // 生成html文件名。
        chunks: pageName, // 指定html需要使用哪些chunk。
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
    )
  })

  return { entry, htmlWebpackPlugins }
}

const { entry, htmlWebpackPlugins } = setMPA()

module.exports = {
  mode: 'production',
  entry,
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
          'postcss-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75, // rem相对于px的转换单位，75代表1rem=75px，适用于750设计稿。
              remPrecesion: 8 // px转rem小数点位数。
            }
          }
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
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new CleanWebpackPlugin(),
    new HTMLInlineCSSWebpackPlugin()
  ]
}
