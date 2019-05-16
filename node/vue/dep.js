class Dep{
    constructor(params) {
        this._subs = [];/* 用来存放Watcher对象的数组 */
    }
    addSub (sub) {
        this._subs.push(sub);/* 在subs中添加一个Watcher对象 */
    }
    notify () {/* 通知所有Watcher对象更新视图 */
        this._subs.forEach(sub => {
            sub.update();   
        })
    }
}
module.exports = Dep;