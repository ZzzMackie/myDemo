import {runAfterFirstMounted,} from 'qiankun';
import './index.less';

// for angular subapp

import startQiankun from "./qkIndex";

import apps from "./app";
startQiankun(apps)

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
