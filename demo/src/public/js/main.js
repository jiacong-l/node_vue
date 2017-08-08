/**
 * Description:项目main.js
 * User: 赵一鸣
 * Date: 2017/5/20
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import app from '../../components/app.vue'
import index from '../../components/index.vue'
import list from '../../components/list.vue'
import article from '../../components/article.vue'
import login from '../../components/login.vue'
import regist from '../../components/regist.vue'
import store from './store/index.js'
import loading from '../../myComponents/loading/index.js'
//import test from '../../components/test.vue'
let test = r => require.ensure([], () => r(require('../../components/test.vue')), 'group-foo');
import customComponent1 from '../../myComponents/customComponent1/index.js'
import customComponent2 from '../../myComponents/customComponent2/index.js'
import selectComponent from '../../myComponents/select/index.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(selectComponent);
Vue.use(loading);
Vue.use(customComponent1);
Vue.use(customComponent2);

window.vueEvent = new Vue();

//构建vue路由
var router = new VueRouter({
    routes : [
        {
            name : 'Index',
            path : '/index',
            component : index,
            redirect : '/login',
            children : [
                {
                    name : 'Login',
                    path : '/login',
                    component : login
                },
                {
                    name : 'Regist',
                    path : '/regist',
                    component : regist
                }
            ]
        },
        {
            name : 'List',
            path : '/list',
            component : list
        },
        {
            name : 'Article',
            path : '/article/:uid',
            component : article
        },
        {
            name : 'Test',
            path : '/test',
            component : test
        },
        {
            name : 'Select',
            path : '/select',
            component : selectComponent
        }
    ]
});

//构建vue实例
new Vue({
    el : '#app',
    store : store,
    render : function(createElement){
        return createElement(app);
    },
    router : router
});
