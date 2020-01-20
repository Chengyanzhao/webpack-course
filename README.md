# 第三章 webpack进阶用法

## 自动清理构建目录

使用`clean-webpack-plugin`解决每次编译前都需要手动删除上次编译结果的问题。

安装：`npm i clean-webpack-plugin -D`

配置：

``` js
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  plugins:[
    new CleanWebpackPlugin() // 默认删除output指定的输出目录
  ]
}
```
