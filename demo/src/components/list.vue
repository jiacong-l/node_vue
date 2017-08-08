<template>
    <div>
        <h1>this is list.vue</h1>
        <table cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <td>用户名</td>
                    <td>邮箱</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v, k) in userList">
                    <td>{{v.uname}}</td>
                    <td>{{v.email}}</td>
                    <td>
                        <router-link :to="{name : 'Article', params : {uid : v.id} }">查看详情</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <h1>工作：{{person.work}}</h1>

    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                userList : '',
                person : {
                    name : '赵一鸣',
                    qq : '1047832475',
                    wechat : 'zhao-seo',
                    work : 'WEB前端开发'
                }
            }
        },
        mounted : function(){
            this.$http.get('/list').then(function(result){
                this.userList = JSON.parse(result.bodyText).userList;
            });
        }
    }
</script>