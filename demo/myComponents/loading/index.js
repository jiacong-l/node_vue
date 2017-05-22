/**
 * Description:loadingComponent
 * User: 赵一鸣
 * Date: 2017/5/22
 */

import loadingComponent from './loading.vue';

var loading = {
    install : function(Vue){
        Vue.component('loading', loadingComponent);
    }
};

export default loading;