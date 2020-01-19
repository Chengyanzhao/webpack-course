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
| style-loader  | xzz                                        |
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
