/**
 * Description:首页路由
 * User: 赵一鸣
 * Date: 2017/5/20
 */

var express = require('express');
var router = express.Router();

//首页路由
router.get('/', function(req, res){
    res.render('index');
});

//列表页路由
router.use('/list', require(__dirname + '/list').listRouter);

//文章页路由
router.use('/article', require(__dirname + '/article').articleRouter);

//登录页路由
router.use('/login', require(__dirname + '/login').loginRouter);

//注册页路由
router.use('/regist', require(__dirname + '/regist').registRouter);

exports.indexRouter = router;