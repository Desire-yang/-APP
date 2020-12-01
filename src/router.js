 import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ShuJia from './views/ShuJia.vue'

Vue.use(Router)

export default new Router({ 
  routes: [
    {
      path: '/',
      name: 'shuJia',
      component: ShuJia
    },
    { 
      path: '/sousuo',
      component: () => import('./views/SouSuo.vue')  
    },
    { 
      path: '/shuJia',
      component: () => import('./views/ShuJia.vue')  
    }
   
  ]
})