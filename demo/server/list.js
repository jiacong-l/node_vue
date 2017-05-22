/**
 * Description:登录页路由
 * User: 赵一鸣
 * Date: 2017/5/20
 */

var express = require('express');
var router = express.Router();
var db = require('./db').db;

router.get('/', function(req, res){
    db('select * from node_vue_user', function(error, data){
        res.json({
            userList : data
        });
    });

});

exports.listRouter = router;