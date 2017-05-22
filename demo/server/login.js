/**
 * Description:登录
 * User: 赵一鸣
 * Date: 2017/5/21
 */

var express = require('express');
var router = express.Router();
var db = require('./db').db;
var crypto = require('crypto');

router.post('/loginForm', function(req, res){
    var userInfo = req.body;
    var backInfo = '';
    if(userInfo.email=='' || userInfo.upwd==''){
        backInfo = '0';
        res.json({
            backInfo : backInfo
        });
        return false;
    }
    var md5 = crypto.createHash('md5');//使用md5加密
    var email = userInfo.email;
    var upwd = md5.update(userInfo.upwd).digest('hex');//加密之后的密码
    var query = 'select id from node_vue_user where email="'+email+'" and upwd="'+upwd+'"';
    db(query, function(error, data){
       if(data.length){
           backInfo = '1';
       }else{
           backInfo = '-1';
       }
        res.json({
            backInfo : backInfo
        });
    });
});

exports.loginRouter = router;