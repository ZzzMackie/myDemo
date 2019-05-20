import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/Home')
const Index = () => import('@/components/main/Index')
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
        }
      ]
    }
  ]
})
