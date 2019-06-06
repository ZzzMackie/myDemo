import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/Home')
const Index = () => import('@/components/main/Index')
const News = () => import('@/components/childList/news/News')
const Fairy = () => import('@/components/childList/fairy/Fairy')
const Cheats = () => import('@/components/childList/cheats/Cheats')
const Taikoo = () => import('@/components/childList/taikoo/Taikoo')
const Cdk = () => import('@/components/childList/cdk/Cdk')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        depth: 2,
        keepaLive: true
      },
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/news',
          name: 'news',
          component: News
        },
        {
          path: '/fairy',
          name: 'fairy',
          component: Fairy
        },
        {
          path: '/cheats',
          name: 'cheats',
          component: Cheats
        },
        {
          path: '/taikoo',
          name: 'taikoo',
          component: Taikoo
        },
        {
          path: '/cdk',
          name: 'cdk',
          component: Cdk
        }
      ]
    }
  ]
})
