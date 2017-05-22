/**
 * Description:vuex actions
 * User: 赵一鸣
 * Date: 2017/5/21
 */

import mutations from './mutations.js'

export default {
    increment : function({commit}){
        commit('increment');
    },
    decrement : function({commit}){
        commit('decrement');
    }
}