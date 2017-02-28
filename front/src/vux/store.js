import Vue from 'vue'
import Vuex from 'vuex'
import categoty from './category.js'
import news from './news.js'
import user from './user.js'
import file from './file.js'
Vue.use(Vuex)

export default new Vuex.Store({
    // strict: true, //使用严格模式
    modules: {
        categoty,
        news,
        user,
        file
    },
})