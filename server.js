const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware') // 自动刷新中间件
const config = require('./webpack.config.js')

const complier = webpack(config)
const app = express()

app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(complier, {
  reload: true,
}))

app.listen(3000, function () {
  console.log('example app listening on port 3000')
})