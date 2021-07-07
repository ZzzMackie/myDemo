import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import VueRouter from 'vue-router';
import './public-path';
Vue.config.productionTip = false;
let router:any = null;
let instance:any = null;
declare global {
  interface Window { __POWERED_BY_QIANKUN__: any; }
  interface Window { __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any; }
}
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render(props:any) {
  const container = props.container;
  router = new VueRouter({
    base: !!window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
function storeTest(props:any) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value:any, prev:any) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props:any) {
  console.log('[vue] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  console.log('[vue] vue app bootstraped');
}