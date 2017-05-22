/**
 * Description:注册页路由
 * User: 赵一鸣
 * Date: 2017/5/21
 */

var express = require('express');
var router = express.Router();
var db = require('./db').db;
var crypto = require('crypto');

router.post('/registForm', function(req, res){
    var registMessage = req.body;
    var uname = registMessage.uname;
    var email = registMessage.email;
    var md5 = crypto.createHash('md5');//使用md5加密
    var upwd = md5.update(registMessage.upwd).digest('hex');//加密之后的密码
    var backInfo = '';
    if(uname=='' || !(/(?=.*\d+)(?=.*[a-z)(?=.*[A-Z])(?=.*_){8,}/).test(registMessage.upwd) || !(/^(\w+)@(qq|163|gmail)(\.com)(\.cn)?$/).test(email)){
        backInfo = '0';//输入内容有误
        res.json({
            backInfo : backInfo
        });
        return false;
    }

    //先检查邮箱是否已经存在
    var query = 'select email from node_vue_user where email="'+email+'"';
    db(query, function(error, data){
        if(data.length){
            backInfo = '2';//邮箱已存在
            res.json({
                backInfo : backInfo
            });
        }else{
            //写入数据
            var query = 'insert into node_vue_user set uname="'+uname+'", upwd="'+upwd+'", email="'+email+'"';
            db(query, function(error, data){
                console.log(data.insertId);
                if(!data.insertId){
                    backInfo = '-1';//数据写入出错
                }else{
                    backInfo = '1';//注册成功
                }
                res.json({
                    backInfo : backInfo
                });
            });
        }
    });

});

exports.registRouter = router;