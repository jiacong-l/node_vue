/**
 * Description:
 * User: 赵一鸣
 * Date: 2017/5/23
 */

var readline = require('readline');

var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

/*rl.question('请输入你的内容：', function(content){
    console.log(content);
});*/

rl.on('line', function(data){
    console.log(data);
});

rl.on('resume', function(){
    console.log('resume');
});

