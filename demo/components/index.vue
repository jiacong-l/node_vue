<template>
    <div>
        <h1>this is index.vue</h1>
        <div>
            <router-link to="/login">登录</router-link>
            <router-link to="/regist">注册</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                
            }
        }
    }
</script>