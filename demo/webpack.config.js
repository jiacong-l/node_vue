/**
 * Description:webpack配置文件
 * User: 赵一鸣
 * Date: 2017/5/20
 */

/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  __dirname + '/public/js/main.js',//已多次提及的唯一入口文件
    output: {
        path: __dirname + '/public/build/',//打包后的文件存放的地方
        filename: "build.js"//打包后输出文件的文件名
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
    devServer : {
        contentBase : __dirname + '/public/build/',
        colors : true,
        inline : true
    }
};