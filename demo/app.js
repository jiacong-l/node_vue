/**
 * Description:项目入口文件
 * User: 赵一鸣
 * Date: 2017/5/20
 */

var http = require('http');
var express = require('express');//引入express模块
var app = express();//初始化express
var bodyParse = require('body-parser');//接收post数据
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.config.js');
var reload = require('reload');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {

    // public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));

//设置前端模板录
app.set('views', __dirname + '/src/');
//设置前端模板文件类型
app.set('view engine', 'ejs');

//设置静态资源目录
app.use(express.static(__dirname + '/src/'));

//用来接收post提交的json数据
app.use(bodyParse.json());
//也可以接收任何数据类型的数据，包括文本、视频、图片等
app.use(bodyParse.urlencoded({extended:true}));

//加载路由文件
app.use(require('./server/index').indexRouter);

//创建服务器
var server = http.createServer(app);
reload(server, app);
server.listen(3450, function (error) {
    if (error) {
        throw error;
    }
    console.log('express server is ok');
});