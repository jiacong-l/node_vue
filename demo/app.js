/**
 * Description:项目入口文件
 * User: zhaoyiming
 * Date: 2017/5/20
 */

let http = require('http');
let express = require('express');// 引入express模块
let app = express();// 初始化express
let bodyParse = require('body-parser');// 接收post数据
let webpack = require('webpack');
let webpackDevConfig = require('./webpack.config.js');
let reload = require('reload');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let compiler = webpack(webpackDevConfig);

// 连接编译器和服务器
app.use(webpackDevMiddleware(compiler, {
    // publicPath应该与webpack.config.js中配置的publicPath相同
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));

// 启用热更新
app.use(webpackHotMiddleware(compiler));

// 设置前端模板录
app.set('views', __dirname + '/src/');

// 设置前端模板文件类型
app.set('view engine', 'ejs');

// 设置静态资源目录
app.use(express.static(__dirname + '/src/'));

// 用来接收post提交的json数据
app.use(bodyParse.json());

// 也可以接收任何数据类型的数据，包括文本、视频、图片等
app.use(bodyParse.urlencoded({extended:true}));

// 加载路由文件
app.use(require('./server/index').indexRouter);

// 创建服务器
let server = http.createServer(app);
reload(server, app);
server.listen(3450, (error) => {
	if (error) {
        throw error;
    }
    console.log('express server is ok');
});