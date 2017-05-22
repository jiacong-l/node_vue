<template>
    <div>
        <p>
            <label for="uname">用户名</label>
            <input type="text" name="uname" id="uname" />
        </p>
        <p>
            <label for="upwd">密码</label>
            <input type="password" name="upwd" id="upwd" placeholder="至少8位(同时包含数字+大小写字母+下划线)" />
        </p>
        <p>
            <label for="upwdCheck">确认密码</label>
            <input type="password" name="upwdCheck" id="upwdCheck" />
        </p>
        <p>
            <label for="email">邮箱</label>
            <input type="text" name="email" id="email" />
        </p>
        <p>
            <input type="button" value="注册" v-on:click="toRegist();" />
        </p>
    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                
            }
        },
        methods : {
            toRegist : function(){
                //用户名
                var uname = document.getElementById('uname');
                if(uname=='' || uname.value==''){
                    alert('用户名不能为空！');
                    return false;
                }

                //密码
                var upwd = document.getElementById('upwd');
                if(upwd==null || upwd.value==''){
                    alert('密码不能为空！');
                    return false;
                }
                if(!(/(?=.*\d+)(?=.*[a-z)(?=.*[A-Z])(?=.*_){8,}/).test(upwd.value)){
                    alert('密码格式不正确，请重新输入！');
                    return false;
                }

                //确认密码
                var upwdCheck = document.getElementById('upwdCheck');
                if(upwd.value!=upwdCheck.value){
                    alert('两次输入的密码不一致，请重新输入！');
                    return false;
                }

                //邮箱
                var email = document.getElementById('email');
                if(email==null || email.value==''){
                    alert('邮箱不能为空！');
                    return false;
                }
                if(!(/^(\w+)@(qq|163|gmail)(\.com)(\.cn)?$/).test(email.value)){
                    alert('邮箱格式不正确，请重新输入！');
                    return false;
                }

                //开始注册
                this.$http.post('/regist/registForm', {
                    uname : uname.value,
                    upwd : upwd.value,
                    email : email.value
                }, {emulateJSON : true}).then(function(result){
                    console.log(JSON.parse(result.bodyText).backInfo);
                    switch(JSON.parse(result.bodyText).backInfo){
                        case '1':
                            alert('恭喜，注册成功！');
                            break;
                        case '-1':
                            alert('注册失败，请重新操作！');
                            break;
                        case '0':
                            alert('内容输入有误，请检查后重新输入提交！');
                            break;
                        case '2':
                            alert('此邮箱已被其他用户使用，请更换注册邮箱！');
                            break;
                    }
                });
            }
        }
    }
</script>