// src/micro/index.ts
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  runAfterFirstMounted, 
  setDefaultMountApp, 
  initGlobalState
} from "qiankun";
import NProgress from "nprogress";
import { Message } from "element-ui";
import "nprogress/nprogress.css";
NProgress.configure({ parent: "html" });
export default function(apps: []) {
  const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
  });
  registerMicroApps(apps, {
    beforeLoad: (app) => {
      // 加载微应用前，加载进度条
      console.log("beforeLoad",app);
      NProgress.start();
      return Promise.resolve();
    },
    afterMount: (app) => {
      NProgress.done();
      console.log("afterMount",app);
      return Promise.resolve();
    }
  });

  onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

  setGlobalState({
    ignore: 'master',
    user: {
      name: 'master',
    },
  });

  /**
   * Step3 设置默认进入的子应用
   */
  setDefaultMountApp('/vue');

  addGlobalUncaughtErrorHandler((event: any) => {
    const { msg } = event as any;
    NProgress.done();
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      Message.error("微应用加载失败，请检查应用是否可运行");
    }
  });

  start();
}
