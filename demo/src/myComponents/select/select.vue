<template>
    <div>
        <input type="text" id="content" />
        <ul v-for="(v1, k1) in nodeList">
            <li class="first">
                <span>{{v.remark}}</span>
                <ul v-for="(v2, k2) in v1.child">
                    <li class="second">
                        <span>{{v2.remark}}</span>
                        <ul v-for="(v3, k3) in v2.child">
                            <li class="third">
                                <span>{{v3.remark}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                
            }
        },
        mounted : function(){
            this.$http.get('/list').then(function(result){
                this.nodeList = JSON.parse(result.data);
            });
        }
    }
</script>