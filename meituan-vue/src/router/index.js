import Vue from 'vue'
import Router from 'vue-router'
const blankPage = () => import('@/layout/Blank')
const Default = () => import('@/layout/Default')
const IndexPage = () => import('@/page/PageIndex')
const GoodsList = () => import('@/page/GoodsList')
const ChangeCity = () => import('@/page/ChangeCity')
const Register = () => import('@/page/SingUp')
const Login = () => import('@/page/SingIn')
const Forget = () => import('@/layout/Forget')
const ProductDeatil = () => import('@/page/ProductDeatil')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: Default,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goodsList',
          component: GoodsList
        },
        {
          path: '/index',
          name: 'indexPage',
          component: IndexPage
        },
        {
          path: '/changecity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: '/forget',
          name: 'forget',
          component: Forget
        },
        {
          path: '/productDeatil',
          name: 'productDeatil',
          component: ProductDeatil
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children: [{
        path: 'register',
        name: 'register',
        component: Register
      }, {
        path: 'login',
        name: 'login',
        component: Login
      }]
    }
  ]
})
