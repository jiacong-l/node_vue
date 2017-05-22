<template>
    <div>
        <p>
            <label for="email">邮箱</label>
            <input type="text" name="email" id="email" />
        </p>
        <p>
            <label for="upwd">密码</label>
            <input type="text" name="upwd" id="upwd" />
        </p>
        <p>
            <input type="button" value="登录" v-on:click="toLogin();" />
        </p>
        <hr>
        <h1>{{count}}</h1>
    </div>
</template>
<script type="text/javascript">
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data : function(){
            return {

            }
        },
        computed : mapGetters([
            'count'
        ]),
        methods : {
            toLogin : function(){
                //用户名
                var email = document.getElementById('email');
                if(email==null || email.value==''){
                    alert('邮箱不能为空！');
                    return false;
                }

                //密码
                var upwd = document.getElementById('upwd');
                if(upwd==null || upwd.value==''){
                    alert('密码不能为空！');
                    return false;
                }

                //开始登录
                this.$http.post('/login/loginForm', {email : email.value, upwd : upwd.value}, {emulateJSON : true}).then(function(result){
                    switch(JSON.parse(result.bodyText).backInfo){
                        case '0':
                            alert('用户名或密码不能为空！');
                            break;
                        case '1':
                            alert('登录成功！');
                            break;
                        case '-1':
                            alert('邮箱或密码有误！');
                            break;
                        default:
                            alert('非法提交！');
                    }
                });
            }
        }
    };
</script>