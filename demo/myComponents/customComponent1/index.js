/**
 * Description:自定义组件1
 * User: 赵一鸣
 * Date: 2017/5/22
 */

import customComponent1 from './customComponent1.vue'

export default {
    install : function(Vue){
        Vue.component('customComponent1', customComponent1);
    }
}