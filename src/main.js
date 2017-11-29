// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

// 导入vue-router路由
import VueRouter from 'vue-router'
// 绑定到vue中
Vue.use(VueRouter)
import routers from './router'


// 导入element-ui
import ElementUi from 'element-ui'
import '../static/elementui/theme-chalk/index.css'
Vue.use(ElementUi)
//导入模块
import Home from './components/home.vue'

const router = new VueRouter({
  // mode: 'history',
  routes: routers
})
// 倒入elementui css文件
// 倒入css文件
import '../static/css/style.css';

import vuex from 'vuex'
Vue.use(vuex)

var state = {
  Language: 'Chinese',
  num: 0
}

var actions = {
  chageLanguage({
    commit
  }, parmsLanguage) {
    commit('chageLanguage', parmsLanguage)
  },
  chageNum({
    commit
  }, parmsNum) {
    commit('chageNum', parmsNum)
  }
}

var mutations = {
  chageLanguage(state, parmsLanguage) {
    state.Language = parmsLanguage
  },
  chageNum(state, parmsNum) {
    state.num = parmsNum
  }
}
var getters = {}

var store = new vuex.Store({
  state,
  actions,
  mutations,
  getters
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
