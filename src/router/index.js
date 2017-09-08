import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Coin from '@/views/coin/Coin'
import Market from '@/views/market/Market'
import Btc114 from '@/views/market/Btc114'
import User from '@/views/user/User'
import UserTrade from '@/views/user/UserTrade'
import News from '@/views/news/News'
import NewsList from '@/views/news/NewsList'
import NewsEdit from '@/views/news/NewsEdit'

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
      path: '/coin',
      name: 'Coin',
      component: Coin
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/btc114',
      name: 'Btc114',
      component: Btc114
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'trade',
          component: UserTrade
        }
      ]
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      children: [
        {
          path: '',
          component: NewsList
        },
        {
          path: 'edit',
          component: NewsEdit
        }
      ]
    }
  ]
})
