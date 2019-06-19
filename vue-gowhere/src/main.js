/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'css/resetPhone.css'
import 'css/border.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import fastClick from 'fastclick'
Vue.use(ElementUI)
Vue.config.productionTip = false
// eslint-disable-next-line no-unused-vars
Vue.prototype.$EventBus = new Vue() // 事件总线 跨级组件通信
// vue2.4版本新定義的跨級組件通信方式
// $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。
// 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，
// 并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。

// $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
// 它可以通过 v-on="$listeners" 传入内部组件

// 可跨级
// Vue2.2.0新增API,这对选项需要一起使用，
// 以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，
// 并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过provider来提供变量，
// 然后在子孙组件中通过inject来注入变量。
// provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，
// 主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

// ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
// $parent / $children：访问父 / 子实例
// 这两种方法的弊端是，无法在跨级或兄弟间通信。还有自定义事件和props，

// 需要注意的是：这两种都是直接得到组件实例，使用后可以直接调用组件的方法或访问数据。我们先来看个用 ref来访问组件的例子：

// 父子通信：
// 父向子传递数据是通过 props，子向父是通过 events（$emit）；通过父链 / 子链也可以通信（$parent / $children）；ref 也可以访问组件实例；provide / inject API；$attrs/$listeners
// 兄弟通信：
// Bus；Vuex
// 跨级通信：
// Bus；Vuex；provide / inject API、$attrs/$listeners

fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// eslint-disable-next-line no-unused-vars
const curry = function curry (fn, length) {
  length = length || fn.length
  return function (...args) {
    return args.length >= length ? fn.apply(this, args) : curry(fn.bind(this, ...args), length - args.length)
  }
}

// eslint-disable-next-line no-unused-vars

const currying = fn => {
  const judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg)
  return judge
}
const add = currying(function (a, b, c) {
  console.log(a + b + c)
})
add(1)(2)(3)
