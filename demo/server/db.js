/**
 * Description:数据库配置
 * User: 赵一鸣
 * Date: 2017/5/21
 */

var mysql = require('mysql');

exports.db = function(sql, callback){
    var db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'node_vue'
    });

    db.connect();

    db.query(sql, callback);

    db.end();
};
