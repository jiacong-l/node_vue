/**
 * Description:webpack配置文件
 * User: zhaoyiming
 * Date: 2017/5/20
 */

/* 
* 引入操作路径模块和webpack 
*/
var path = require('path');
var webpack = require('webpack');

/*
* 生成html模板插件
*/
var Html = require('html-webpack-plugin');

/*
* 用来传递到客户端，并和服务器的 HMR 插件联络.
* 联络的 URL 为path=/__webpack_hmr&timeout=20000.
* 其中 path 有 HMR 服务监听，timeout 是如果失联的话，达到20000毫秒就算超时，不必再做尝试.
*/
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true';

var devConfig = {
    entry: [hotMiddlewareScript, __dirname + '/src/public/js/main.js'],// 唯一入口文件
    output: {
        path: __dirname + '/src/build/',// 打包后的文件存放的地方
        filename: "[name].build.js",// 打包后输出文件的文件名
        publicPath: 'http://127.0.0.1:3450/src/build/' // 例如在express中，指定了public/dist是网站的根目录，网站的源文件存放在public中，那么就需要设置path:”./dist”指定打包输出到该目录，而publicPath就需要设置为”/”,表示当前路径。
    },
    module: {
        loaders: [
            // 用来解析vue后缀的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            // 用babel来解析js文件并把es6的语法转换成浏览器认识的语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除模块安装目录的文件
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new Html({
            filename: __dirname + '/src/index.ejs',  // 生成的html存放路径，相对于 path
            template: __dirname + '/src/template.html',  // html模板路径
            title: 'NodeJs+VueJs测试——赵一鸣博客',
            cache: true,
            inject: true,  // 允许插件修改哪些内容，包括head与body
            hash: true,  // 为静态资源生成hash值
        }),
		// new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = devConfig;