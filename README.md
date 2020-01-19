# 第一章 Webpack初体验

构建项目  
`npm init -y`

安装依赖  
`npm i webpack webpack-cli`

创建Webpack配置文件`webpack.config.js`

``` js
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
```

在package.json中添加build脚本：

``` json
"scripts": {
  "build": "webpack"
}
```

构建：
`npm run build`
