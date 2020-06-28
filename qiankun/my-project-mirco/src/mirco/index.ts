// src/micro/index.ts
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start
} from "qiankun";
import NProgress from "nprogress";
import { Message } from "element-ui";
import "nprogress/nprogress.css";
NProgress.configure({ parent: "html" });
export default function(apps:[]) {
    registerMicroApps(apps, {
      beforeLoad: () => {
        // 加载微应用前，加载进度条
        console.log('beforeLoad')
        NProgress.start();
        return Promise.resolve();
      },
      afterMount: () => {
        NProgress.done();console.log('afterMount')
        return Promise.resolve();
      }
    });

    addGlobalUncaughtErrorHandler((event:any) => {
      const { msg } = event as any;
      NProgress.done();
      // 加载失败时提示
      if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        Message.error("微应用加载失败，请检查应用是否可运行");
      }
    });

    start();
  }
