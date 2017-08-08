<template>
    <div>
        <h1>{{$route.params.uid}}</h1>
        <div>ID：{{uid}}</div>
        <div>姓名：{{uname}}</div>
        <div>密码：{{upwd}}</div>
        <div>邮箱：{{email}}</div>
        <hr>
        <h1>{{count}}</h1>
        <button v-on:click="increment();">增加</button>
        <button v-on:click="decrement();">减少</button>
    </div>
</template>
<script type="text/javascript">
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data : function(){
            return {
                uid : '',
                uname : '',
                upwd : '',
                email : ''
            }
        },
        computed : mapGetters([
            'count'
        ]),
        methods : mapActions([
            'increment',
            'decrement'
        ]),
        mounted : function(){
            var uid = this.$route.params.uid;
            this.$http.post('/article', {uid : uid}, {emulateJSON : true}).then(function(result){
                var userDetail = JSON.parse(result.bodyText).userDetail[0];
                this.uid = userDetail.id;
                this.uname = userDetail.uname;
                this.upwd = userDetail.upwd;
                this.email = userDetail.email;
            });
        }
    }
</script>