<template>
    <div>
        <h1>this is customComponent2</h1>
        <h1>这是接收到的数据：《{{data}}》</h1>
    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                data : ''
            }
        },
        mounted : function(){
            vueEvent.$on('data-custom1', function(result){
                this.data = result;
            }.bind(this));
        }
    }
</script>