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
