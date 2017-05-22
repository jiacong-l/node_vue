/**
 * Description:
 * User: 赵一鸣
 * Date: 2017/5/21
 */

var express = require('express');
var router = express.Router();
var db = require('./db').db;

router.post('/', function(req, res){
    var query = 'select * from node_vue_user where id=' + req.body.uid;
    db(query, function(error, data){
        res.json({
            userDetail : data
        });
    });
});

exports.articleRouter = router;