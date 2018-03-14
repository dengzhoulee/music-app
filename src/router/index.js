import Vue from 'vue'
import Router from 'vue-router'

const Recommend = () => import('../pages/recommend/recommend')
const Singer = () => import('../pages/singer/singer')
const Search = () => import('../pages/search/search')
const Rank = () => import('../pages/rank/rank')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }
  ]
})
