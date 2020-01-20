# 第二章 Webpack的基础用法

Webpack是模块打包器，一切资源都视为模块。webpack根据入口文件和它依赖的模块形成一个依赖Tree，根据这个模块Tree进行打包。

## entry

entry用来webpack打包的入口。可以配置单入口、多入口。

### 单入口

单入口常应用于单页应用。  
单入口时，entry是一个字符串，值是入口文件的路径。

``` js
module.exports = {
  entry: './path/to/my/entry/file.js',
}
```

### 多入口

多入口常用于多页应用。  
多入口时，entry是一个对象，key是指定名称，值是对应的入口文件路径。

``` js
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js'
  }
}
```

## output

output用来告诉webpack如何将编译后的文件输出到磁盘。

### 单入口配置

``` js
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}
```

### 多入口配置

``` js
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js' // 通过占位符确保文件名称唯一。这里的name会被entry中的key替代。
  }
}
```

## loaders

webpack开箱即用只支持js和json两种文件类型。但是可以通过loaders去支持其他的文件类型，并且把他们转化成有效的模块，添加到依赖图中。

一个loader本身是一个函数，接收源文件作为参数，返回转换的结果。

在一个rule项中使用多个loader，loader是链式调用的，顺序是从右到左，也就是后面的loader先执行。

### loaders用法

``` js
const path = reuqire('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/, // 指定匹配规则
        use: 'raw-loader' // 指定loader名称
      }
    ]
  }
}
```

### 常用loaders

| 名称          | 描述                                       |
| ------------- | ------------------------------------------ |
| babel-loader  | 转换ES6+新特性语法                         |
| css-loader    | 支持.css文件的加载和解析。(import xxx.css) |
| style-loader  | 将css插入head中                            |
| less-loader   | 将less文件转换成css                        |
| ts-loader     | 将ts转换成js                               |
| file-loader   | 图片、字体等文件的打包                     |
| raw-loader    | 将文件以字符串的形式导入                   |
| thread-loader | 多进程打包js和css                          |

## plugins

插件用于bundle文件的优化，资源管理和环境变量注入。plugins作用于整个构建过程，包括从构建开始到构建结束的任何阶段。  
可以理解为，任何loaders没办法做的事情，都可以在plugins中完成。

### plugins的用法

``` js
const path = require('path')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({  // 将插件放到plugins数组中。
      template: './src/index.html'
    })
  ]
}
```

### 常见的plugins

| 名称                     | 描述                                       |
| ------------------------ | ------------------------------------------ |
| CommonsChunkPlugin       | 将chunks相同的模块代码提取成公共js         |
| CleanWebpackPlugin       | 清理构建目录                               |
| ExtractTextWebpackPlugin | 将css从bundle文件里提取成一个独立的css文件 |
| CopyWebpackPlugin        | 将文件或者文件夹拷贝到构建的输出目录       |
| HtmlWebpackPlugin        | 创建html文件去承载输出的bundle             |
| UglifyjsWebpackPlugin    | 压缩js                                     |
| ZipWebpackPlugin         | 将打包出的资源生成一个zip包                |

## Mode

mode在webpack4中加入，用来指定当前的构建环境，它有三个可选值：

- `production`: 生产模式。(默认)
- `development`: 开发模式。
- `none`: 不指定模式。

设置mode可以自动触发webpack内置的函数，也可以理解为在不同的环境，webpack有一些不同的功能。

### mode的内置函数功能

| 选项          | 描述                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `development` | 设置`process.env.NODE_ENV`值为`development`。开启`NamedChunksPlugin`和`NamedModulesPlugin`                                                             |
| `production`  | 设置`process.env.NODE_ENV`值为`production`。开启`FlagDependencyUsagePlugin`等。[查看更多](https://www.webpackjs.com/concepts/mode/#%E7%94%A8%E6%B3%95) |
| `none`        | 不开启任何优化选项                                                                                                                                     |

## 解析ES6

使用babel-loader解析ES6语法。

### babel

babel用于将ES6+的代码转化为ES5。

**babel的配置文件：**  
babel的配置文件为`.babelrc`，主要包含`presets`和`plugins`两部分配置。
`plugins`是一个数组，每个数组项都是一个plugin，每个plugin就是一个功能。当存在多个plugin时，由前向后解析。
`presets`称为预设，也是一个数组，数组的每一项是一个预设配置。每一个预设配置是一系列plugin的集合。可以理解为，为了达到某种目的，需要配置n个plugin，但是这个配置很通用，所以将n个plugin包装起来成为一个preset。presets的解析是由后向前。

为了解析es6，需要使用`@babel/preset-env`预设：`npm i @babel/core @babel/preset-env -D`

配置`.babalrc`

``` js
{
  "presets": ["@babel/preset-env"]
}
```

**babel-loader：**  
babel-loader依赖于babel，所以在使用时，也需要依赖`@babel/core`、`@babel/preset-env`：  
`npm i @babel/core @babel/preset-env babel-loader -D`。

``` js
module.exports = {
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
}
```

## 解析React JSX

对于react的解析，需要在`.babelrc`中增加React的`preset`: `@babel/preset-react`。另外安装`react`、`react-dom`。  
`npm i react react-dom @babel/preset-react -D`

``` js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

## 解析CSS

在webpack中解析css文件需要使用`css-loader`、`style-loader`两个loader。  
`css-loader`用于加载`.css`文件，并且转换成commonjs对象。在遇到代码`import 'xxx.css'`时使用。  
`style-loader`将样式通过`<style>`标签插入到`head`中。

安装：`npm i style-loader css-loader -D`

``` js
module.exports = {
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader'] // 顺序是从右到左，先执行css-loader，然后将结果传递给style-loader。
      }
    ]
  }
}
```

## 解析less和sass

解析less需要使用`less-loader`，它将less转换成css。

安装：  
`less-loader`需要依赖`less`作为核心库，所以也需要安装`less`。`npm i less less-loader -D`。

配置：

``` js
module.exports = {
  module: {
    rules: [
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
```

## 解析图片和字体资源

对于图片的解析有两个loader可以使用：`file-loader`、`url-loader`。

### file-loader

`file-loader`用于处理一些文件，对于图片或字体资源，可以使用这个loader处理。

安装：`npm i file-loader -D`

配置：

``` js
module.exports = {
  module: {
    rules: [
      {
        test: /.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  }
}
```

在项目中使用：

``` js
import logo from './image/logo.png'

// jsx render
render(){
  return <img src={ logo } />
}

```

**字体资源：**

对字体资源的处理，和上面对图片的处理相同，只是loader中的test改成字体文件后缀。

``` js
{
  test: /.(woff|woff2|eot|ttf)$/,
  use: 'file-loader'
}
```

### url-loader

`url-loader`与`file-loader`都可以处理图片和字体，但`url-loader`还可以对较小的资源自动base64处理。`url-loader`内部也是使用了`file-loader`。

安装：`npm i url-loader -D`

配置：

``` js
module.exports = {
  module: {
    rules: [
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options:{
            limit: 10240 // 单位：字节b。
          }
        }]
      }
    ]
  }
}
```

按此配置打包后，小于`limit`的图片不会在dist目录中出现，而是直接插入到js中。

## 文件监听

文件监听是在发现源代码变化时，自动重新构建。在webpack中开启监听模式有两种方式：

- 在启动webpack命令时，带上`--watch`参数
- 在webpack.config.js中设置`watch: true`

webpack对于watch的默认配置：

``` js
module.exports = {
  watch: false, // 是否开启文件监听，默认为false。
  watchOptions: {
    ignored: /node_modules/, // 忽略监听的文件夹，默认为空。
    aggregateTimeout: 300, // 监听到变化发生后延迟300ms再执行，默认300，单位ms。某个文件发生变化，并不会立刻告诉监听者，而是缓存起来，等aggregateTimeout。
    poll: 1000 // 判断文件是否发生变化是通过不停询问系统执行文件有没有变化实现的，默认每秒访问1000次，单位次/s。
  }
}
```

## 热更新

webpack中的热更新有两种方式：

1. `webpack-dev-server`
2. `webpack-dev-middleware`

### webpack-dev-server

使用上一节中的watch时，每次自动构建后我们依然需要手动刷新浏览器，这很麻烦。使用webpack的热更新及插件即可解决这个问题。

webpack热更新依赖于`webpack-dev-server`和`HotModuleReplacementPlugin`插件。WDS不输出文件，而是放在内容中，这样避免io可提升构建效率。`HotModuleReplacementPlugin`可解决自动刷新问题，尝尝用这套配置在开发环境中。

安装：
首先我们需要安装`webpack-dev-server`：`npm i webpack-dev-server -D`。对于`HotModuleReplacementPlugin`插件，它在webpack中内置，所不需要额外安装。

另外我们需要在webpack.config.js中添加`devServer`配置开启热更新，另外添加`HotModuleReplacementPlugin`插件来实现自动构建后的页面自动刷新。

``` js
const webpack = require('webpack')

module.exports = {
  // ...
  plugins:[
    new webpack.HotModuleReplacementPlugin() // 自动刷新插件。
  ],
  devServer: {
    contentBase: './dist', // webpack-dev-server 服务资源目录。可以将它看成express项目中的static目录public。
    hot :true // 开启热更新。
  }
}
```

最后，需要在package.json中的`scripts`中添加命令：`webpack-dev-server --open`，`--open`参数会自动打开浏览器。  

到此配置结束，可以在项目命令行中执行`npm run dev`来查看效果。脚本更改后，webpack会自动构建，dist目录没有构建结果，但页面会自动刷新。

### webpack-dev-middleware

WDM需要配合一个node server来使用，通常使用express或Koa。WDM将webpack输出的文件传输给服务器，适用于灵活的定制场景。

``` js
// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js'], // './src/index.js',
    search: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/search.js'] // './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
        use: ['style-loader', 'css-loader'] // 顺序是从右到左，先执行css-loader，然后将结果传递给style-loader。
      },
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 自动刷新插件。
    new HtmlWebpackPlugin({
      template: './dist/search.html',
      title: 'Output Management',
    }),
  ],
  devServer: {
    contentBase: './dist', // webpack-dev-server 服务资源目录。可以将它看成express项目中的static目录public。
    hot: true // 开启热更新。
  }
}

```

``` js
// server.js
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
```

此时启动文件设置成这个配置入口即可，可以在package.json的`scripts`中设置：`"server": "node server.js"`，然后再项目命令行输入`npm run server`启动。

## 文件指纹

webpack打包后文件一般都有一个字母加数字的后缀，这就是文件指纹。文件指纹用于对文件的版本管理。另外对于没有修改的文件可以不修改文件的指纹，继续使用缓存。

常见的文件指纹种类：

1. Hash：和整个项目的构建相关，只要项目中任何文件有修改，整个项目构建的hash值就会更改。
2. Chunkhash：和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值，适用于多页面配置。
3. Contenthash：根据文件内容来定义hash，文件内容不变，则contenthash不变。适用于css配置。

针对不同类型资源设置文件指纹：

``` js
// webpack.config.js
module.exports = {
  output: {
    path: __dirname + '/dist',
    filename: '[name][chunkhash:8].js' // 对于js,使用chunkhash，取前8位。
  },
  module: {
    rules: [
       {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
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
          loader: 'file-loader', // 同样适用于url-loader
          options: {
            name: 'img/[name][hash:8].[ext]' // 对于图片，使用hash，取前8位。file-loader也支持contenthash。图片和字体的hash与前面的hash不同，这里也是指资源本身的hash，默认采用md5生成。
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 使用MiniCssExtractPlugin插件把style-loader的css提取成独立的文件。
      filename: '[name][contenthash:8].css' // 对于css，使用contenthash，取前8位。
    })
  ]
}
```

注意：使用`MiniCssExtractPlugin`提取css文件时，无法使用`style-loader`，他们的功能是互斥的，所以他们只能使用一个。

## 代码压缩

代码压缩主要是HTML、JS、CSS分别压缩。

### js文件压缩

在webpack4中，内置了`uglifyjs-webpack-plugin`了来压缩js。所以默认打包js文件就已压缩过了。

### css文件压缩

使用`optimize-css-assets-webpack-plugin`压缩css文件，同时使用`cssnano`css预处理器。  

安装依赖：`npm i optimize-css-assets-webpack-plugin cssnano -D`

``` js
// webpack.prod.js
module.exports = {
  //...
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    })
  ]
}
```

### html文件压缩

修改`html-webpack-plugin`，设置压缩参数

安装依赖：`npm i html-webpack-plugi -D`

``` js
// webpack.prod.js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // other options
      minify: {
        html5: true,
        collapseWhitespace: true, // 是否折叠空白
        preserveLineBreaks:false, // 是否保存换行
        minifyCSS: true, // 是否压缩css
        minifyJS: true, // 是否压缩js
        removeComments: false // 是否移除注释
      }
    })
  ]
}
```
