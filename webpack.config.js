const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'] // 顺序是从右到左，先执行css-loader，然后将结果传递给style-loader。
      }, r
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 102400 // 对于小于这个限制的资源才进行base64处理。单位：字节b。
          }
        }]
      },
      {
        test: /.(woff|woff2|eot|ttf)$/,
        use: 'file-loader'
      }
    ]
  }
}
