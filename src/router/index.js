import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Btc114 from '@/views/Btc114'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/btc114',
      name: 'Btc114',
      component: Btc114
    }
  ]
})
