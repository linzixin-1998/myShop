import Vue from 'vue'
import Vuex from 'vuex'
import Cart from './modules/Cart'
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        Cart
      },    
})