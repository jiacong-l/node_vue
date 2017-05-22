<template>
    <div>
        <h1>this myself loading.vue</h1>
        <input type="text" id="myWork" />
        <button v-on:click="change();">修改父组件数据</button>
    </div>
</template>
<script type="text/javascript">
    export default {
        props : ['p'],
        data : function(){
            return {
                
            }
        },
        methods : {
            change : function(){
                var myWork = document.getElementById('myWork').value;
                if( myWork != '' ){
                    this.p.work = myWork;
                }
            }
        }
    }
</script>