
/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './render/ReactRender';
import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = loading => render({ loading });
const apps: any = [
  {
    name: "my-project-mirco",
    entry: "//localhost:8080/",
    container: "#subapp-viewport",
    activeRule: "/",
    loader,
    props:{
        name: "sss"
    }
  }
];

export default apps;
