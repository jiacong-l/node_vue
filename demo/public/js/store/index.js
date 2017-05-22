/**
 * Description:vuex store 主文件
 * User: 赵一鸣
 * Date: 2017/5/21
 */

import Vue from 'vue'
import VueX from 'VueX'

Vue.use(VueX);

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default new VueX.Store({
    state,
    getters,
    mutations,
    actions
});