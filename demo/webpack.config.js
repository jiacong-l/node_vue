/**
 * Description:webpack配置文件
 * User: 赵一鸣
 * Date: 2017/5/20
 */

/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
var Html = require('html-webpack-plugin');

module.exports = {
    entry:  __dirname + '/src/public/js/main.js',//已多次提及的唯一入口文件
    output: {
        path: __dirname + '/src/build/',//打包后的文件存放的地方
        filename: "[chunkhash].build.js",//打包后输出文件的文件名
        publicPath: './build/' // 例如在express中，指定了public/dist是网站的根目录，网站的源文件存放在public中，那么就需要设置path:”./dist”指定打包输出到该目录，而publicPath就需要设置为”/”,表示当前路径。
    },
    module: {
        loaders: [
            //用来解析vue后缀的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            //用babel来解析js文件并把es6的语法转换成浏览器认识的语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            }
        ]
    },
    plugins : [
        new Html({
            filename:__dirname + '/src/index.ejs',  //生成的html存放路径，相对于 path
            template:__dirname + '/src/template.html',  //html模板路径
            title: 'NodeJs+VueJs测试——赵一鸣博客',
            cache: true,
            inject:true,  //允许插件修改哪些内容，包括head与body
            hash:true,  //为静态资源生成hash值
        })
    ]
};