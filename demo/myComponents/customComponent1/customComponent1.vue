<template>
    <div>
        <h1>this is customComponent1</h1>
        <button v-on:click="func();">发射数据</button>
    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                data : 'this is data of customComponent1'
            }
        },
        methods : {
            func : function(){
                vueEvent.$emit('data-custom1', this.data);
            }
        }
    }
</script>