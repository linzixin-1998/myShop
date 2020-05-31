// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store/store.js'


import '../mint-ui/index'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

axios.defaults.baseURL="http://39.97.184.183:3000"
//axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})


