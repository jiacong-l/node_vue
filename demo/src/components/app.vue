<template>
    <div>
        <div class="nav">
            <router-link to="/login">首页</router-link>
            <router-link to="/list">列表页</router-link>
            <router-link to="/test">测试页11</router-link>
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