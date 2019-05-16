const Dep = require('./dep');
class Watcher {
    constructor(params) {
        Dep.target = this;
    }
    update () {
        console.log('change')
    }
}
Dep.target = null;

module.exports = Watcher