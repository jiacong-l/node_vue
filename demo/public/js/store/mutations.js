/**
 * Description:vuex mutations
 * User: 赵一鸣
 * Date: 2017/5/21
 */


import getters from './getters.js'

export default {
    increment : function(state){
        state.count += 1;
    },
    decrement : function(state){
        state.count -= 1;
    }
}