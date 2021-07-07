
import {Dep} from'./dep.js';
import {Watcher} from'./Watcher.js';


function viewChange(val) {
    app.innerHTML = val
    console.log('change')
}

function defineReactive(obj, key, val) {//数据绑定
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            dep.addSub(Dep.target);
            return val;
        },
        set: function reactiveSetter(newval) {
            if (newval === val) return;
            viewChange(newval); 
            dep.notify();
        }
    })
}

function observer(value) {//响应
    if (!value || typeof value !== 'object') return;
    Object.keys(value).forEach(function (key) {
        defineReactive(value, key, value[key]);
    })
}

class Vue {//vue类
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        new Watcher();
        console.log('render~', this._data.test);
    }
}

let o = new Vue({
    data: {
        test: "I am test."
    }
});
o._data.test = "hello,world."; 