/*
 * @Author: mikey.zhaopeng
 * @Date: 2019-04-01 20:42:51
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-04-02 22:36:06
 */
Function.prototype._method = function(name, fn) {
  if (!this.prototype[name]) {
    this.pototype[name] = fn;
  }
  return this;
};
var _FunSpace = (function() {
  function FunSpace() {}
  /**
   * @desc 生成一个记忆函数
   * @param {Array} memo
   * @param {Function} formula
   * @return {Function} recur
   */
  FunSpace._method("memoizer", function(memo, formula) {
    var recur = function(n) {
      var result = memo[n];
      if (typeof result !== "number") {
        result = formula(recur, n);
        memo[n] = result;
      }
      return result;
    };
    return recur;
  });
  /**
   * @desc 函数节流
   * @param {Function} func
   * @param {Number} wait
   */
  FunSpace._method("throttle", function(func, wait) {
    var timer = null;
    return function() {
      var args = Array.prototype.slice.call(arguments);
      if (!timer) {
        func.apply(null, args);
        timer = setTimeout(function() {
          timer = null;
        }, wait);
      }
    };
  });
  /**
   * @desc 函数防抖
   * @param {Function} func
   * @param {Number} wait
   */
  FunSpace._method("debounce", function(func, wait) {
    //防抖
    var timer = null;
    return function() {
      var args = Array.prototype.slice.call(arguments);
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(null, args);
      }, wait);
    };
  });
  /**
   * @desc 事件函数
   * @param {Dom} dom
   * @param {String} type
   * @param {Function} fn
   * @param {Boolean} m
   */
  FunSpace._method("addEvent", function(dom, type, fn, m) {
    //事件
    if (window.addEventListener) {
      dom.addEventListener(type, fn, m);
      this.addEvent = function() {
        dom.addEventListener(type, fn, m);
      };
    } else if (window.attachEvent) {
      dom.attachEvent("on" + type, fn);
      this.addEvent = function() {
        dom.attachEvent("on" + type, fn);
      };
    } else {
      dom["on" + type] = fn;
    }
    return this;
  });
  /**
   * @desc 取消事件函数
   * @param {Dom} dom
   * @param {String} type
   * @param {Function} fn
   * @param {Boolean} m
   */
  FunSpace._method("removeEvent", function(dom, type, fn, m) {
    //移除事件
    if (window.removeEventListener) {
      dom.removeEventListener(type, fn, m);
      this.removeEvent = function() {
        dom.removeEventListener(type, fn, m);
      };
    } else if (window.attachEvent) {
      dom.detachEvent("on" + type, fn);
      this.addEvent = function() {
        dom.detachEvent("on" + type, fn);
      };
    } else {
      dom["on" + type] = null;
    }
    return this;
  });
  /**
   * @desc 改进typeof方法
   * @param {*} value
   * @return {String} result
   */
  FunSpace._method("_typeof", function(value) {
    var result = "",
      str = typeof value;
    result =
      str === "object" && value !== null && Array.isArray(value)
        ? "array"
        : str === "function"
        ? "function"
        : value === null
        ? "null"
        : str !== "object"
        ? str
        : "object";
    return result;
  });
  /**
   * @desc 去掉字符串首尾空格
   * @param {String} str
   * @return {String}
   */
  FunSpace._method("trim", function(str) {
    var reg = /^\s*|\s*$/;
    return str.replace(reg, "");
  });
  /**
   * @desc 去掉字符串空格
   * @param {String} str
   * @return {String}
   */
  FunSpace._method("trimAll", function(str) {
    var reg = /\s*/g;
    return str.replace(reg, "");
  });
  /**
   * @desc 去掉字符串开头空格
   * @param {String} str
   * @return {String}
   */
  FunSpace._method("trimStart", function(str) {
    var reg = /^\s*/;
    return str.replace(reg, "");
  });
  /**
   * @desc 去掉字符串尾巴空格
   * @param {String} str
   * @return {String}
   */
  FunSpace._method("trimEnd", function(str) {
    var reg = /\s*$/;
    return str.replace(reg, "");
  });
  /**
   * @desc 对象深拷贝
   * @param {Object} origin
   * @param {Object} target
   * @return {Object}
   */
  FunSpace._method("deepClone", function(origin, target) {
    var target = target || {},
      toStr = Object.prototype.toString,
      arrayStr = `[object Array]`,
      obj = "object";
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
  });
  /**
   * @desc Json深拷贝
   * @param {Object} obj
   * @return {Object}
   */
  FunSpace._method("jsonDClone", function(obj) {
    return JSON.parse(JSON.stringify(obj));
  });
  /**
   * @desc 原型链继承
   * @param {Function} son
   * @param {Function} dad
   */
  FunSpace._method("inherit", function(son, dad) {
    function F() {}
    F.prototype = dad.prototype;
    son.prototype = new F();
    son.prototype.constructor = son;
    son.prototype.uber = dad.prototype;
  });
  /**
   * @desc 原生includes
   * @param {Number|String} item
   * @param {Number} n
   * @return {Boolean}
   */
  if (!Array.prototype.includes) {
    Array._method("includes", function(item, n) {
      var i = n || 0,
        len = this.length;
      if (n >= len || Math.abs(n) > len) {
        throw new Error("n is Not in the range of arrays");
      }
      for (i; i < len; i++) {
        if (this.indexOf(item, n) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    });
  }
  /**
   * @desc 原生indexOf
   * @param {Number|String} item
   * @param {Number} n
   * @return {Number}
   */
  if (!Array.prototype.indexOf) {
    Array._method("indexOf", function(item, n) {
      var len = this.length;
      if (n >= len || Math.abs(n) > len) {
        throw new Error("since is Not in the range of arrays");
      }
      var i = isNaN(n) ? 0 : n; //有第2参时
      i = i < 0 ? len + i : i; //第2参为负数时
      for (i; i < len; i++) {
        if (this[i] === item) {
          return i;
        }
      }
      return -1;
    });
  }
  /**
   * @desc es5原生isArray
   * @param {*} i
   * @return {String}
   */
  if (!Array.isArray) {
    Array.isArray = function(i) {
      return Object.prototype.toString.call(i) === "[object Array]";
    };
  }
  /**
   * @desc 生成一个dismension长度的每个值为initial的数组
   * @param {Number} dimension 
   * @param {*} initial
   * @return {Array} arr
   */
  Array._dim = function(dimension, initial) {
    var arr = [],
      i = 0;
    for (i; i < dimension; i++) {
      arr[i] = initial;
    }
    return arr;
  };
  /**
   * @desc  生成m*n矩阵数组
   * @param {Number} m 
   * @param {Number} n 
   * @param {*} initial 
   * @return {Array} matArr
   */
  Array._matrix = function(m, n, initial) {
    var a,
      i,
      j,
      matArr = [];
    for (i = 0; i < m; i++) {
      a = [];
      for (j = 0; j < n; j++) {
        a[j] = initial;
      }
      matArr[i] = a;
    }
    return matArr;
  };
  /**
   *
   * @desc 随机生成颜色
   * @return {String}
   */
  FunSpace._method("randomColor", function() {
    return (
      "#" +
      ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
    );
  });
  /**
   * @desc  有序递归二分查找
   * @param {Number} low
   * @param {Number} high
   * @param {Number} key
   * @param {Array} arr
   */
  FunSpace._method("binary_search", function(low, high, key, arr) {
    var mid = Math.round((low + high) / 2),
      len = arr.length;
    if (low > high) {
      return -1;
    }
    if (!(arr instanceof Array) || len < 2) {
      return;
    }
    while (high > low) {
      if (key === arr[mid]) {
        return mid;
      } else if (key > arr[mid]) {
        low = mid + 1;
        return this.binary_search(low, high, key, arr);
      } else {
        high = mid - 1;
        return this.binary_search(low, high, key, arr);
      }
    }
  });
  /**
   *
   * @desc 生成指定范围随机数
   * @param  {Number} min
   * @param  {Number} max
   * @return {Number}
   */
  FunSpace._method("randomNum", function(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  });
  /**
   * @desc 生成n个长度的0-9随机字符串
   * @param {Number} n
   * @return {String}
   */
  FunSpace._method("randomStrNum", function(n) {
    let max = 1;
    for (let i = 0; i < n; i++) {
      max *= 10;
    }
    return function() {
      let str = "" + parseInt(Math.random() * max);
      let count = n - str.length;
      for (let i = 0; i < count; i++) {
        str += "0";
      }
      return str;
    };
  });

  return new FunSpace();
})();
