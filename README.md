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

## 自动补齐CSS3前缀

由于浏览器的标准并没有完全统一，如果需要使用这些未统一标准的CSS3语法，就要针对不同内核的浏览器做兼容性处理。比如webkit内核的浏览器中，css3属性前加`-webkit`，firfox中加`-moz`等。看下面代码例子：

``` css
.box{
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
}
```

在webpack中，可以使用`autoprefixer`css后置处理器插件来帮助我们自动补全前缀。`autoprefixer`可以接受一个`browsers`选项，根据can i use网站来指定兼容到什么程度。

`autoprefixer`通常配合`postcss-loader`一起使用，`postcss-loader`除了支持css样式补全之外，还支持css module、style-lint等等。

安装：`npm i postcss-loader autoprefixer -D`

配置：

针对`autoprefixer`，创建`.browserslistrc`配置文件，来指定兼容到浏览器的版本。

``` text
// .browserslistrc
> 1%
last 2 versions
not ie <= 8
```

针对`postcss-loader`，创建`postcss.config.js`编写这个loader的配置。

``` js
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

在webpack中添加`postcss-loader`：

``` js
// webpack.config.js
module.exports = {
  module: [
    rules: [
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
    ]
  ]
}
```

## 移动端CSS px自动转rem

使用`px2rem-loader`，可以将代码中的px自动转换为rem单位。  
安装：`npm i px2rem-loader -D`。

针对根元素的`font-size`单位，我们可以使用手淘的`lib-flexible`库，在页面打开时去设置。  
安装：由于是在项目代码中使用，所以要将他设置为dependencies，`npm i lib-flexible -S`。

配置：

``` js
// webpack.config.js
module.exports = {
  module: {
    rules: [
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
    ]
  }
}
```

设置根元素`font-size`：找到`lib-flexible`库，手动将代码放在html的head中。

## 静态资源内联

### HTML和JS内联

可以使用`raw-loader`处理html和js的内联。(注意使用0.5.1版本)

安装：`npm i raw-loader@0.5.1 -D`

准备：`meta.html`放一些meta标签。目的是将这些meta标签插入到index.html的head中。

``` html
<!-- meta.html -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="renderer" content="webkit">
<meta name="force-rendering" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="google-site-verification" content="FTeR0c8arOPKh8c5DYh_9uu98_zJbaWw53J-Sch9MTg">
<meta name="description" property="og:description" content="有问题，上知乎。知乎，可信赖的问答社区，以让每个人高效获得可信赖的解答为使命。">
```

在index.html中引入：

``` html
<head>
  <!-- 引入meta中的标签 -->
  ${ require('raw-loader!./meta.html') }
  <title>index</title>
  <!-- 引入js脚本 -->
  <script>${ require('raw-loader!babel-loader!../../node_modules.lib-flexible/flexible.js') }</script>
</head>
```

### CSS内联

方案1：借助`style-loader`，在上一章节中使用过。
方案2：`html-inline-css-webpack-plugin`，针对打包好的css chunk，内联到html head内style标签中。

来看一下方案2的使用：

安装：`npm i html-inline-css-webpack-plugin -D`

配置：

``` js
// webpack.config.js
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(),
    new HTMLInlineCSSWebpackPlugin()
  ],
}
```

## 多页面应用打包通用方案

在之前的章节中，我们针对两个页面`index.html`和`search.html`配置了两个`WebpackHtmlPlugin`来打包两个页面。这样做缺点很明显，每次新增、删除页面都要手动添加、删除`WebpackHtmlPlugin`插件。

动态获取entry，并根据entry的数量动态配置`WebpackHtmlPlugin`即可解决这个问题。如果想要动态获取entry，还需要对我们的多页面文件目录结构进行设置：

``` js
// entry
entry: {
  app: './src/app/index.js',
  search: './src/search/index.js'
}
```

通过这样的结构，我们可以用`glob`库去匹配多页面的入口形成entry对象，再通过这个对象生成多个`WebpackHtmlPlugin`即可。  

下面来看看如何操作：

安装`glob`：`npm i glob -D`

配置：

``` js

```