import {Dep} from './dep.js';
export class Watcher {
    constructor(params) {
        Dep.target = this;
    }
    update () {
        console.log('change')
    }
}
Dep.target = null;
