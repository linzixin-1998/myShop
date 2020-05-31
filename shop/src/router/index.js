import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index/index'
import Home from '@/pages/index/home'
import category from '@/pages/index/category'
import shopCart from '@/pages/index/shopCart'
import My from '@/pages/index/my'


import Order from '@/pages/order/order'
import OrderList from '@/pages/order/orderList'


import goods from '@/pages/goods/goods'


import cate_main from '@/components/category/cate_main'


import user from '@/pages/user/user'
import login from '@/pages/user/login'
import logon from '@/pages/user/logon'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/index', component: index, redirect: '/home', children: [
        {path: '/home', component: Home },
        {path: '/category', component: category, redirect: '/category/cate_main', children: [
            { path: '/category/cate_main', component: cate_main }]},
        {path: '/my', component: My},
        {path: '/shopCart', component: shopCart },]},
    { path: '/goods', component: goods},
    { path: '/user', component: user },
    { path: '/login', component: login },
    { path: '/logon', component: logon },
    { path: '/order', component: Order },
    { path: '/orderList', component: OrderList }],

    //对于所有路由导航，简单地让页面滚动到顶部。
    //返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    
})

