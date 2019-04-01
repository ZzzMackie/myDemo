var _FunSpace = (function () {
    function FunSpace() { }
    FunSpace.prototype.throttle = function (func, wait) {//节流
        let timer = null;
        return function (...args) {
            if (!timer) {
                func(...args);
                timer = setTimeout(() => {
                    timer = null;
                }, wait);
            }
        }
    }
    FunSpace.prototype.debounce = function (func, wait) {//防抖
        let timer = null;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, wait);
        }

    }
    FunSpace.prototype.addEvent = function (dom, type, fn, m) {//事件
        if (window.addEventListener) {
            dom.addEventListener(type, fn, m);
            this.addEvent = function () {
                dom.addEventListener(type, fn, m);
            }
        } else if (window.attachEvent) {
            dom.attachEvent(`on${type}`, fn);
            this.addEvent = function () {
                dom.attachEvent(`on${type}`, fn);
            }
        } else {
            dom[`on${type}`] = fn;
        }
        return this;
    }
    FunSpace.prototype.removeEvent = function (dom, type, fn, m) {//移除事件
        if (window.removeEventListener) {
            dom.removeEventListener(type, fn, m);
            this.removeEvent = function () {
                dom.removeEventListener(type, fn, m);
            }
        } else if (window.attachEvent) {
            dom.detachEvent(`on${type}`, fn);
            this.addEvent = function () {
                dom.detachEvent(`on${type}`, fn);
            }
        } else {
            dom[`on${type}`] = null;
        }
        return this;
    }
    FunSpace.prototype.trim = function (str) {
        var reg = /^\s*|\s*$/;
        return str.replace(reg, '');
    }
    FunSpace.prototype.trimAll = function (str) {
        var reg = /\s*/g;
        return str.replace(reg, '');
    }
    FunSpace.prototype.trimStart = function (str) {
        var reg = /^\s*/;
        return str.replace(reg, '');
    }
    FunSpace.prototype.trimEnd = function (str) {
        var reg = /\s*$/;
        return str.replace(reg, '');
    }
    FunSpace.prototype.deepClone = function (origin, target) {
        var target = target || {},
            toStr = Object.prototype.toString,
            arrayStr = `[object Array]`,
            obj = 'object';
        for (var key in origin) {
            if (origin.hasOwnProperty(key)) {
                if (typeof origin[key] !== obj) {
                    target[key] = origin[key];
                } else if (origin[key] !== null && typeof origin[key] === obj) {
                    target[key] = toStr.call(origin[key]) === arrayStr ? [] : {};
                    this.deepClone(origin[key], target[key]);
                }

            }
        }
        return target;
    }
    FunSpace.prototype.jsonDClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    FunSpace.prototype.inherit = function (son, dad) {
        function F() { }
        F.prototype = dad.prototype;
        son.prototype = new F();
        son.prototype.constructor = son;
        son.prototype.uber = dad.prototype;

    }
    if(!Array.prototype.includes) {
        Array.prototype.includes = function (item,since) {
            var since = since || 0, len = this.length;
            for(var i = since; i < len;i++){
                if(this.indexOf(item) !== -1){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
    Array.prototype.includess = function (item,since) {
        var since = since || 0, len = this.length;
        if(Math.abs(since) >= len ){
            throw new Error('since is Not in the range of arrays'); 
        }
        for(var i = since; i < len;i++){
            if(this.indexOf(item) !== -1){
                return true;
            }else{
                return false;
            }
        }
    }
    
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOfa = function (item,since) {
            var result = -1, len = this.length;
            if(Math.abs(since) >= len ){
                throw new Error('since is Not in the range of arrays'); 
            }
            for (var i = since; i < len; i++) {
                if (this[i] === item) {
                    result = i;
                    break;
                }
            }
            return result;
        }
    }
    Array.prototype.indexOfa = function (item,since) {
        var result = -1, len = this.length;
        if(Math.abs(since) >= len ){
            throw new Error('since is Not in the range of arrays'); 
        }
        if(since < 0){

        }
        for (var i = since; i < len; i++) {
            if (this[i] === item) {
                result = i;
                break;
            }
        }
        return result;
    }

    return new FunSpace();
})()