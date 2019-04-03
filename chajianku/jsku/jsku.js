/** 
 * @Author: mikey.zhaopeng
 * @Date: 2019-04-01 20:42:51
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-04-03 18:00:58
 */
/** 
 * 在Function的原型链上扩展的方法用来给原型添加方法的函数
 * @function name - _method
 * @augments Function
 * @param {string} - name
 * @param {Function} - fn
 * @return {this}
 */
Function.prototype._method = function (name, fn) {
  if(!name || typeof name !== 'string') throw new Error(name + ' must be a string');
  if(!fn || typeof fn !== 'function') throw new Error(fn + ' must be a function');
  if (!this.prototype[name]) {
    this.prototype[name] = fn;
  }
  return this;
};
/**
 * 一个命名空间 返回的一个实例对象
 * @namespace - _FunSpace
 * @global - _FunSpace
 * @instance {Object} - _FunSpace
 */
var _FunSpace = (function () {
  /**
   * 一个构造函数
   * @instance  
   * @constructor FunSpace 
   */
  function FunSpace() { }
  /**
   * 生成一个记忆函数
   * @function name - memoizer
   * @instance 
   * @instance 
   * @param {Array} - memo
   * @param {Function} - formula
   * @return {Function} 
   */
  FunSpace._method("memoizer", function (memo, formula) {
    if(this._typeof(formula) !== 'function') throw new Error(formula + ' must be a function')
    if(this._typeof(memo) !== 'array') throw new Error(memo + ' must be a array')
    var recur = function (n) {
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
   * 函数节流
   * @function name - throttle
   * @instance 
   * @param {Function} - func
   * @param {Number} - wait
   * @return {Function}
   */
  FunSpace._method("throttle", function (func, wait) {
    if(this._typeof(func) !== 'function') throw new Error(func + ' must be a function')
    if(this._typeof(wait) !== 'number') throw new Error(wait + ' must be a number')
    var timer = null;
    return function () {
      var args = Array.prototype.slice.call(arguments);
      if (!timer) {
        func.apply(null, args);
        timer = setTimeout(function () {
          timer = null;
        }, wait);
      }
    };
  });
  /**
   * 函数防抖
   * @function name - debounce
   * @instance 
   * @param {Function} - func
   * @param {Number} - wait
   * @return {Function}
   */
  FunSpace._method("debounce", function (func, wait) {
    //防抖
    var timer = null;
    if(this._typeof(func) !== 'function') throw new Error(func + ' must be a function')
    if(this._typeof(wait) !== 'number') throw new Error(wait + ' must be a number')
    
    return function () {
      var args = Array.prototype.slice.call(arguments);
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(null, args);
      }, wait);
    };
  });
  /**
   * 事件函数
   * @function name - addEvent
   * @instance 
   * @param {Dom} - dom
   * @param {String} - type
   * @param {Function} - fn
   * @param {Boolean} - m
   * @return {this}
   */
  FunSpace._method("addEvent", function (dom, type, fn, m) {
    //事件
    if(!(dom instanceof HTMLElement)) throw new Error(dom + ' is not a Dom');
    if(this._typeof(fn) !== 'function') throw new Error(fn + ' must be a function')
    var m = m || false;
    if (window.addEventListener) {
      dom.addEventListener(type, fn, m);
      this.addEvent = function () {
        dom.addEventListener(type, fn, m);
      };
    } else if (window.attachEvent) {
      dom.attachEvent("on" + type, fn);
      this.addEvent = function () {
        dom.attachEvent("on" + type, fn);
      };
    } else {
      dom["on" + type] = fn;
    }
    return this;
  });
  /**
   * 取消事件函数
   * @function name - removeEvent
   * @instance 
   * @param {Dom} - dom
   * @param {String} - type
   * @param {Function} - fn
   * @param {Boolean} - m
   */
  FunSpace._method("removeEvent", function (dom, type, fn, m) {
    //移除事件
    if(!(dom instanceof HTMLElement)) throw new Error(dom + ' is not a Dom');
    if(this._typeof(fn) !== 'function') throw new Error(fn + ' must be a function')
    var m = m || false;
    if (window.removeEventListener) {
      dom.removeEventListener(type, fn, m);
      this.removeEvent = function () {
        dom.removeEventListener(type, fn, m);
      };
    } else if (window.attachEvent) {
      dom.detachEvent("on" + type, fn);
      this.addEvent = function () {
        dom.detachEvent("on" + type, fn);
      };
    } else {
      dom["on" + type] = null;
    }
    return this;
  });
  /**
   * 改进typeof方法
   * @function name - _typeof
   * @instance 
   * @param {*} - value
   * @return {String}
   */
  FunSpace._method("_typeof", function (value) {
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
   * 去掉字符串首尾空格
   * @instance @function name - trim
   * 
   * @param {String} - str
   * @return {String}
   */
  FunSpace._method("trim", function (str) {
    if(!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /^\s*|\s*$/;
    return str.replace(reg, "");
  });
  /**
   * 去掉字符串空格
   * @instance @function name - trimAll
   * 
   * @param {String} - str
   * @return {String}
   */
  FunSpace._method("trimAll", function (str) {
    if(!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /\s*/g;
    return str.replace(reg, "");
  });
  /**
   * 去掉字符串开头空格
   * @instance @function name - trimStart
   * 
   * @param {String} - str
   * @return {String}
   */
  FunSpace._method("trimStart", function (str) {
    if(!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /^\s*/;
    return str.replace(reg, "");
  });
  /**
   * 去掉字符串尾巴空格
   * @function name - trimEnd
   * @instance 
   * @param {String} - str
   * @return {String}
   */
  FunSpace._method("trimEnd", function (str) {
    if(!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /\s*$/;
    return str.replace(reg, "");
  });
  /**
   * 对象深拷贝
   * @function name - deepClone
   * @instance 
   * @param {*} - origin
   * @param {*} - target
   * @return {Object}
   */
  FunSpace._method("deepClone", function (origin, target) {
    if(!origin || !target) throw new Error('Are you kidding me!!!');
    var target = target || {},
      toStr = Object.prototype.toString,
      arrayStr = 'Array',
      obj = "object";
    for (var key in origin) {
      if (origin.hasOwnProperty(key)) {
        if (typeof origin[key] !== obj) {
          target[key] = origin[key];
        } else if (origin[key] !== null && typeof origin[key] === obj) {
          target[key] = toStr.call(origin[key]).slice(8,-1) === arrayStr ? [] : {};
          this.deepClone(origin[key], target[key]);
        }
      }
    }
    return target;
  });
  /**
   * Json深拷贝
   * @instance @function name - jsonDClone
   * 
   * @param {Object} - obj
   * @return {Object}
   */
  FunSpace._method("jsonDClone", function (obj) {
    if(!obj || this._typeof(obj) !== 'object') throw new Error(obj + ' must be a object')
    return JSON.parse(JSON.stringify(obj));
  });
  /**
   * 原型链继承
   * @function name - inherit
   * @instance 
   * @param {Function} - son
   * @param {Function} - dad
   * @return {this}
   */
  FunSpace._method("inherit", function (son, dad) {
    if(!son || !dad) throw new Error('Are you kidding me!!!');
    function F() { }
    F.prototype = dad.prototype;
    son.prototype = new F();
    son.prototype.constructor = son;
    son.prototype.uber = dad.prototype;
    return this;
  });
  /**
   * 原生includes
   * @function name - includes
   * @instance 
   * @param {Number|String} - item
   * @param {Number} - n
   * @return {Boolean}
   */
  if (!Array.prototype.includes) {
    Array._method("includes", function (item, n) {
      var i = n || 0,
        len = this.length;
      if (n >= len || Math.abs(n) > len) {
        throw new Error(n + " is Not in the range of arrays");
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
   * 原生indexOf
   * @instance @function name - indexOf
   * 
   * @param {Number|String} - item
   * @param {Number} - n
   * @return {Number}
   */
  if (!Array.prototype.indexOf) {
    Array._method("indexOf", function (item, n) {
      var len = this.length;
      if (n >= len || Math.abs(n) > len) {
        throw new Error(n + " is Not in the range of arrays");
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
   * es5原生isArray
   * @static Array的静态方法
   * @instance @function name - isArray
   * 
   * @param {*} - i
   * @return {String}
   */
  if (!Array.isArray) {
    Array.isArray = function (i) {
      return Object.prototype.toString.call(i).slice(8,-1) === "Array";
    };
  }
  /**
   * 数组去重
   * @function name - unique
   * @instance 
   * @return {Array}
   */
  Array._method('unique',function () {
    var newArr = [];
    this.forEach(function (ele) {
      newArr.indexOf(ele) === -1 && newArr.push(ele);
    });
    return newArr;
  })
  /**
   * 生成一个dismension长度的每个值为initial的数组
   * @static Array的静态方法
   * @function name - _dim
   * @instance 
   * @param {Number} - dimension 
   * @param {*} - initial
   * @return {Array}
   */
  Array._dim = function (dimension, initial) {
    if(!dimension || FunSpace.prototype._typeof(dimension) !== 'number') throw new Error(dimension + ' must be a number')
    var arr = [],
        initial = initial || 0,
        i = 0;
    for (i; i < dimension; i++) {
      arr[i] = initial;
    }
    return arr;
  };
  /**
   *  生成m*n矩阵数组
   * @static Array的静态方法
   * @function name - _matrix
   * @instance 
   * @param {Number} - m 
   * @param {Number} - n 
   * @param {*} - initial 
   * @return {Array}
   */
  Array._matrix = function (m, n, initial) {
    if(!m || !n  || FunSpace.prototype._typeof(m) !== 'number' || FunSpace.prototype._typeof(n) !== 'number') throw new Error(m+ ' ' + n + ' must be a number')
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
   * 随机生成颜色
   * @instance @function name - randomColor
   * 
   * @return {String}
   */
  FunSpace._method("randomColor", function () {
    return (
      "#" +
      ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
    );
  });
  /**
   *  有序递归二分查找
   * @instance @function name - binary_search
   * 
   * @param {Number} - low
   * @param {Number} - high
   * @param {Number} - key
   * @param {Array} - arr
   * @return {Number}
   */
  FunSpace._method("binary_search", function (low, high, key, arr) {
    if(this._typeof(low) !== 'number' || this._typeof(high) !== 'number' || this._typeof(key) !== 'number' || this._typeof(arr) !== 'array') throw new Error(low + ' '+ high+' '+ key +' must be a number or ' + arr + 'is array');
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
   * 递归归并排序
   * @instance @function name - mergeSort
   * 
   * @param {Array}
   * @return {Array}
   */
  FunSpace._method('mergeSort', function (arr) {
    if(!Array.isArray(arr)) throw new Error( arr+' must be a Array');
    var len = arr.length;
    if (len === 1) return arr;
    var mid = Math.round(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);
    return FunSpace.merge(this.mergeSort(left), this.mergeSort(right));
  })
  /**
   * @static FunSpace的静态方法
   * @instance @function name - merge 
   * 
   * @param {Array} - left
   * @param {Array} - right
   * @return {Array}
   */
  FunSpace.merge = function (left, right) {
    var newArr = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        newArr.push(left.shift())
      } else {
        newArr.push(right.shift());
      }
    }
    return newArr.concat(left, right);
  }
  /**
   * 快速排序
   * @function name - quickSort 
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  FunSpace._method('quickSort', function (arr) {
    if(!Array.isArray(arr)) throw new Error( arr+' must be a Array');
    var len = arr.length;
    if (len <= 1) return arr;
    var mid = Math.floor(len / 2),
      midNum = arr.splice(mid, 1)[0],
      left = [],
      right = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < midNum) {
        left.push(arr[i])
      } else {
        right.push(arr[i]);
      }
    }
    return this.quickSort(left).concat([midNum], this.quickSort(right));
  })
  /**
   * 冒泡排序
   * @function name - bubbleSort 
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  FunSpace._method('bubbleSort', function (arr) {
    if(!Array.isArray(arr)) throw new Error( arr+' must be a Array');
    var len = arr.length,temp;
    for(var i = len; i >= 2; i --){
      for(var j = 0; j < len; j ++){
        if(arr[j] > arr[j+1]){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  })
  /**
   *
   * 生成指定范围随机数
   * @function name - randomNum 
   * @instance 
   * @param  {Number} - min
   * @param  {Number} - max
   * @return {Number}
   */
  FunSpace._method("randomNum", function (min, max) {
    if(this._typeof(min) !== 'number' || this._typeof(max) !== 'number' || max < min) throw new Error(min+ ' ' + max + ' must be a number or ' + max + '<' +min)
    return Math.floor(min + Math.random() * (max - min));
  });
  /**
   * 生成n个长度的0-9随机字符串的方法
   * @function name - randomStrNum 
   * @instance 
   * @param {Number} - n
   * @return {Function}
   */
  FunSpace._method("randomStrNum", function (n) {
    if(!n || this._typeof(n) !== 'number') throw new Error(n + ' must be a number')
    let max = 1;
    for (let i = 0; i < n; i++) {
      max *= 10;
    }
    return function () {
      let str = "" + parseInt(Math.random() * max);
      let count = n - str.length;
      for (let i = 0; i < count; i++) {
        str += "0";
      }
      return str;
    };
  });
  /**
   * 生成单例函数
   * @function name - singleFun 
   * @instance 
   * @param {Function} - fn
   * @return {FUnction}
   */
  FunSpace._method('singleFun', function (fn) {
    if(!fn ||this._typeof(fn) !== 'function') throw new Error(fn + ' must be a function')
    var result = null;
    return function () {
      return result || ( result = fn.apply(this, arguments) );
    }
  })

  return new FunSpace();
})();

module.exports = _FunSpace;