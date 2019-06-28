/***
 *      ┌─┐       ┌─┐
 *   ┌──┘ ┴───────┘ ┴──┐
 *   │                 │
 *   │       ───       │
 *   │  ─┬┘       └┬─  │
 *   │                 │
 *   │       ─┴─       │
 *   │                 │
 *   └───┐         ┌───┘
 *       │         │
 *       │         │
 *       │         │
 *       │         └──────────────┐
 *       │                        │
 *       │                        ├─┐
 *       │                        ┌─┘
 *       │                        │
 *       └─┐  ┐  ┌───────┬──┐  ┌──┘
 *         │ ─┤ ─┤       │ ─┤ ─┤
 *         └──┴──┘       └──┴──┘
 *                神兽保佑
 *               代码无BUG!
 */
/** 
 * @Author: mikey.zhaopeng
 * @Date: 2019-04-01 20:42:51
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-05-27 18:23:58
 */

/** 
 * 在Function的原型链上扩展的方法用来给构造函数原型添加方法的函数
 * @function name - _method
 * @examples Array._method('is',function(){})
 * @augments Function
 * @param {string} - name
 * @param {Function} - fn
 * @return {this}
 */
Function.prototype._method = function (name, fn) {
  if (!name || typeof name !== 'string') throw new Error(name + ' must be a string');
  if (!fn || typeof fn !== 'function') throw new Error(fn + ' must be a function');
  if (!this.prototype[name]) {
    this.prototype[name] = fn;
  }
  return this;
};
/**
 * 一个命名空间 定义了一个全局的实例对象 可以调用对象里的方法
 * @namespace - _FunSpace $FS
 * @examples _FunSpace._typeof(null)
 * @global - _FunSpace $FS
 * @instance {Object} - _FunSpace
 */
(function () {
  /**
   * 一个构造函数
   * @instance  
   * @constructor FunSpace 
   */
  function FunSpace() { }

  /**
   * 横竖屏判断
   * @function name - orientationDetect
   * @instance 
   */
  FunSpace._method('orientationDetect', function () {
    var displayStr = "";
    if (displayStr.length > 0) {
      FunSpace.prototype.removeClass(document.body, displayStr);
    }
    switch (window.orientation) {
      case 0:
        //刘海在上边
        displayStr = "direction_por";
        break;
      case -90:
        //刘海在右边
        displayStr = "direction_land_ops";
        break;
      case 90:
        //刘海在左边
        displayStr = "direction_land";
        break;
      case 180:
        //刘海在下边
        displayStr = "direction_por_ops";
        break;
    }
    FunSpace.prototype.addClass(document.body, displayStr);
  })
    /**
     * 柯里化函数
     * @function name - curry
     * @instance 
     * @instance 
     * @param {Function} - fn
     * @param {Number} - length
     * @return {Function} 
     */
    ._method('curry', function (fn, length) {
      length = length || fn.length
      return function (...args) {
        return args.length >= length ? fn.apply(this, args) : curry(fn.bind(this, ...args), length - args.length)
      }
    })
    /**
     * 生成一个记忆函数
     * @function name - memoizer
     * @instance 
     * @instance 
     * @param {Array} - memo
     * @param {Function} - formula
     * @return {Function} 
     */
    ._method("memoizer", function (memo, formula) {
      if (this._typeof(formula) !== 'function') throw new Error(formula + ' must be a function')
      if (this._typeof(memo) !== 'array') throw new Error(memo + ' must be a array')
      var recur = function (n) {
        var result = memo[n];
        if (typeof result !== "number") {
          result = formula(recur, n);
          memo[n] = result;
        }
        return result;
      };
      return recur;
    })
  /**
   * 函数节流
   * @function name - throttle
   * @instance 
   * @param {Function} - func
   * @param {Number} - wait
   * @return {Function}
   */
  ._method("throttle", function (func, wait) {
      if (this._typeof(func) !== 'function') throw new Error(func + ' must be a function')
      if (this._typeof(wait) !== 'number') throw new Error(wait + ' must be a number')
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
    })
    /**
   * 今天星期几
   * @function name - returnWeekday
   * @instance 
   * @return {String}
   */
  ._method('returnWeekday', function () {
    return "今天是星期" + "日一二三四五六".charAt(new Date().getDay());
  })
  /**
   * 函数防抖
   * @function name - debounce
   * @instance 
   * @param {Function} - func
   * @param {Number} - wait
   * @return {Function}
   */
  ._method("debounce", function (func, wait) {
    //防抖
    var timer = null;
    if (this._typeof(func) !== 'function') throw new Error(func + ' must be a function')
    if (this._typeof(wait) !== 'number') throw new Error(wait + ' must be a number')

    return function () {
      var args = Array.prototype.slice.call(arguments);
      timer && clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(null, args);
      }, wait);
    };
  })
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
  ._method("addEvent", function (dom, type, fn, m) {
    //事件
    if (!(dom instanceof HTMLElement)) throw new Error(dom + ' is not a Dom');
    if (this._typeof(fn) !== 'function') throw new Error(fn + ' must be a function')
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
  })
  /**
   * 取消事件函数
   * @function name - removeEvent
   * @instance 
   * @param {Dom} - dom
   * @param {String} - type
   * @param {Function} - fn
   * @param {Boolean} - m
   * @return {this}
   */
  ._method("removeEvent", function (dom, type, fn, m) {
    //移除事件
    if (!(dom instanceof HTMLElement)) throw new Error(dom + ' is not a Dom');
    if (this._typeof(fn) !== 'function') throw new Error(fn + ' must be a function')
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
  })
  /**
   * 改进typeof方法
   * @function name - _typeof
   * @instance 
   * @param {*} - value
   * @return {String}
   */
  ._method("_typeof", function (value) {
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
  })
  /**
   * 去掉字符串首尾空格
   * @instance @function name - trim
   * 
   * @param {String} - str
   * @return {String}
   */
  ._method("trim", function (str) {
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /^\s*|\s*$/;
    return str.replace(reg, "");
  })
  /**
   * 去掉字符串空格
   * @instance @function name - trimAll
   * 
   * @param {String} - str
   * @return {String}
   */
  ._method("trimAll", function (str) {
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /\s*/g;
    return str.replace(reg, "");
  })
  /**
   * 去掉字符串开头空格
   * @instance @function name - trimStart
   * 
   * @param {String} - str
   * @return {String}
   */
  ._method("trimStart", function (str) {
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /^\s*/;
    return str.replace(reg, "");
  })
  /**
   * 去掉字符串尾巴空格
   * @function name - trimEnd
   * @instance 
   * @param {String} - str
   * @return {String}
   */
  ._method("trimEnd", function (str) {
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /\s*$/;
    return str.replace(reg, "");
  })
  /**
   * 对象深拷贝
   * @function name - deepClone
   * @instance 
   * @param {*} - origin
   * @param {*} - target
   * @return {Object}
   */
  ._method("deepClone", function (origin, target) {
    if (!origin || !target) throw new Error('Are you kidding me!!!');
    var target = target || {},
      toStr = Object.prototype.toString,
      arrayStr = 'Array',
      obj = "object";
    for (var key in origin) {
      if (origin.hasOwnProperty(key)) {
        if (typeof origin[key] !== obj || origin[key] === null) {
          target[key] = origin[key];
        } else if (origin[key] !== null && typeof origin[key] === obj) {
          target[key] = toStr.call(origin[key]).slice(8, -1) === arrayStr ? [] : {};
          this.deepClone(origin[key], target[key]);
        }
      }
    }
    return target;
  })
  /**
   * Json深拷贝
   * @instance @function name - jsonDClone
   * 注意1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；
   * 2.如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；
   * 3.如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
   * 4.如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
   * 5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
   * @param {Object} - obj
   * @return {Object}
   */
  ._method("jsonDClone", function (obj) {
    if (!obj || this._typeof(obj) !== 'object') throw new Error(obj + ' must be a object')
    return JSON.parse(JSON.stringify(obj));
  })
  /**
   * 原型链继承
   * @function name - inherit
   * @instance 
   * @param {Function} - son
   * @param {Function} - dad
   * @return {this}
   */
  ._method("inherit", function (son, dad) {
    if (!son || !dad) throw new Error('Are you kidding me!!!');
    function F() { }
    F.prototype = dad.prototype;
    son.prototype = new F();
    son.prototype.constructor = son;
    son.prototype.uber = dad.prototype;
    return this;
  })
  
  /**
   *
   * 随机生成颜色
   * @instance @function name - randomColor
   * 
   * @return {String}
   */
  ._method("randomColor", function () {
    return (
      "#" +
      ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
    );
  })

  /**
   * n&1===0为偶数
   * Fisher–Yates洗牌算法
   * @instance 
   * @function name - shuffle
   * @param {Array} - arr
   * @return {String}
   */
  ._method('shuffle', function (arr) {
    var n = arr.length, t, i;
    while (n) {
      i = Math.random() * n-- | 0;// |位运算符 二进制 全0为0有1为1，&全1为1有0为0：^同为0异为1 不进位的加法，a<<b左移a*2^b a>>b右移 a/2^b  >>>无符号右移运算用 0 填充所有空位。对于正数，这与有符号右移运算的操作一样，而负数则被作为正数来处理。这里主要是乱序后小数取整
      // t = arr[n];
      FunSpace.swap(arr, n, i)
      // arr[i] = arr[n];
      // arr[n] = t;
    }
    return arr;
  })

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
  ._method("binary_search", function (low, high, key, arr) {
    if (this._typeof(low) !== 'number' || this._typeof(high) !== 'number' || this._typeof(key) !== 'number' || this._typeof(arr) !== 'array') throw new Error(low + ' ' + high + ' ' + key + ' must be a number or ' + arr + 'is array');
    var mid = Math.round((low + high) / 2),
      len = arr.length;
    if (low > high) return -1;
    if (!(arr instanceof Array) || len < 2) return;
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
  })
  /**
   * 递归归并排序
   * @instance @function name - mergeSort
   * Runtime: O(nlogn) 稳定
   * @param {Array}
   * @return {Array}
   */
  ._method('mergeSort', function (arr) {
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
    var len = arr.length;
    if (len === 1) return arr;
    var mid = Math.round(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);
    return FunSpace.merge(this.mergeSort(left), this.mergeSort(right));
  })
  
  /**
   * 快速排序
   * Runtime: O(n) 不稳定
   * @function name - quickSort 
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  ._method('quickSort', function (arr) {
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
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
   * Runtime: O(n^2) 稳定
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  ._method('bubbleSort', function (arr) {
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
    var len = arr.length;
    for (var i = len; i >= 2; i--) {
      let swapped = false;
      for (var j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          FunSpace.swap(arr, j, j + 1)
          swapped = true;
        }
      }
      if (!swapped) break;//减少外层循环
    }
    return arr;
  })
  /**
   * 插入排序
   * Runtime: O(n^2) 稳定
   * @function name - insertionSort 
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  ._method('insertionSort', function (arr) {
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
    for (var right = 1; right < arr.length; right++) {//从第2位遍历到最后
      for (var left = right; arr[left] < arr[left - 1]; left--) {//比较当前位是否小于前一位
        FunSpace.swap(arr, left - 1, left)
      }
    }
    return arr;
  })
  /**
   * 选择排序
   * Runtime: O(n^2) 不稳定
   * @function name - selectionSort 
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  ._method('selectionSort', function (arr) {
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
    for (var left = 0; left < arr.length; left++) {//从第1位遍历到最后
      var selection = left;//从第一位开始作为最小的
      for (var right = left + 1; right < arr.length; right++) {//从第2位遍历到最后
        if (arr[selection] > arr[right]) {//判断selection 是否比下一位大
          selection = right;
        }
      }
      if (selection !== left) {//如果不相等则替换值
        FunSpace.swap(arr, selection, left)
      }
    }
    return arr;
  })
  /**
   * 判断是否为空
   * 
   * @function name - isEmpty 
   * @instance 
   * @example
   *  isEmpty() // => true
   *  isEmpty([]) // => true
   *  isEmpty({}) // => true
   *  isEmpty('') // => true
   *  isEmpty([8, 9, 6]) // => false
   *  isEmpty('text') // => false
   *  isEmpty({a: 1}) // => false
   * @param {Array|Object|String} - data
   * @return {Boolean}
   */
  ._method('isEmpty', function (data) {
    return !data || data.length || !Object.keys(data).length;
  })
  /**
   * 数组是否有重复性
   * Runtime: O(n)
   * @function name - isEmpty 
   * @instance 
   * @example
   *  hasDuplicates([]); //↪️ false
   *  hasDuplicates([1, 1]); //↪️ true
   *  hasDuplicates([1, 2]);//↪️ false
   * @param {Array} - data
   * @return {Boolean}
   */
  ._method('hasDuplicates', function (arr) {
    const words = new Map();
    for (let index = 0; index < arr.length; index++) {
      const word = arr[index];
      if (words.has(word)) {
        return true;
      }
      words.set(word, true);
    }
    return false;
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
  ._method("randomNum", function (min, max) {
    if (this._typeof(min) !== 'number' || this._typeof(max) !== 'number' || max < min) throw new Error(min + ' ' + max + ' must be a number or ' + max + '<' + min)
    return Math.floor(min + Math.random() * (max - min));
  })
  /**
   * 生成n个长度的0-9随机字符串的方法
   * @function name - randomStrNum 
   * @instance 
   * @param {Number} - n
   * @return {Function}
   */
  ._method("randomStrNum", function (n) {
    if (!n || this._typeof(n) !== 'number') throw new Error(n + ' must be a number')
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
  })
  /**
   * 生成单例函数
   * @function name - singleFun 
   * @instance 
   * @param {Function} - fn
   * @return {FUnction}
   */
  ._method('singleFun', function (fn) {
    if (!fn || this._typeof(fn) !== 'function') throw new Error(fn + ' must be a function')
    var result = null;
    return function () {
      return result || (result = fn.apply(this, arguments));
    }
  })
  /**
   * 检测是否是回文串字符串
   * @function name - isPalindrome 
   * @instance 
   * @param {String} - str
   * @return {Boolean}
   */
  ._method('isPalindrome', function (str) {
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var reg = /\s*/g, reg2 = /[^a-zA-Z0-9]*/g;
    var newStr = str.replace(reg, '').replace(reg2, '').toLowerCase();
    var reverseStr = newStr.split('').reverse().join('');
    return newStr === reverseStr;
  })
  /**
   * 反转字符串不用reverse方法解决
   * @function name - reverseString 
   * @instance 
   * @param {String} - str
   * @return {String}
   */
  ._method('reverseString', function (str) {
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
    var str = str.split('');
    var len = str.length;
    var mid = Math.floor(len / 2), temp;
    for (var i = 0, j = len - 1; i < mid, j > mid; i++ , j--) {
      temp = str[i];
      str[i] = str[j];
      str[j] = temp
    }
    return str.join('');

  })
  
  /**
   * 转换类数组
   * @instance 
   * @function name - newArray
   * @param {Object} - arr
   * @return {Array}
   */
  ._method('newArray', function (arr) {
    return Array.prototype.slice.call(arr);
  })

  /**
   * 
   * 判断元素是否有某个class
   * @instance 
   * @function name - hasClass
   * @param {HTMLElement} - ele 
   * @param {String} - cls 
   * @return {Boolean}
   */
  ._method('hasClass', function (ele, cls) {
    var flag = new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
    return flag;
  })
  /**
   * 元素添加class
   * @instance 
   * @function name - addClass
   * @param {HTMLElement} - ele 
   * @param {String} - cls 
   * @return {this}
   */
  ._method('addClass', function (ele, cls) {
    if (!this.hasClass(ele, cls)) {
      ele.className += ' ' + cls;
    }
    return this;
  })
  /**
   * 元素移除class
   * @instance 
   * @function name - removeClass
   * @param {HTMLElement} - ele 
   * @param {String} - cls 
   * @return {this}
   */
  ._method('removeClass', function (ele, cls) {
    if (this.hasClass(ele, cls)) {
      var reg = new RegExp(cls);
      ele.className = ele.className.replace(reg, '');
    }
    return this;
  })
  /**
   *  设置cookie
   * @instance 
   * @function name - setCookie
   * @param {String} - name 
   * @param {String} - value 
   * @param {Number} - days
   * @return {this} 
   */
  ._method('setCookie', function (name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
    return this;
  })
  /**
   *  获得cookie
   * @instance 
   * @function name - getCookie
   * @param {String} - name 
   * @return {Boolean} 
   */
  ._method('getCookie', function (name) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
      var tempArr = arr[i].split('=');
      if (tempArr[0] == name) {
        return decodeURIComponent(tempArr[1]);
      } else {
        return false;
      }
    }
  })
  /**
   *  移除cookie
   * @instance 
   * @function name - removeCookie
   * @param {String} - name 
   * @return {this} 
   * 
   */
  ._method('removeCookie', function (name) {
    this.setCookie(name, '', -1);
    return this;
  })
  /**
   * 获取当前浏览器信息
   * @instance 
   * @function name - getExplore
   * @return {String} 
   */
  ._method('getExplore', function () {
    var sys = {},
      ua = navigator.userAgent.toLowerCase(),
      s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
      (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
          (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
              (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'Unkonwn'
  })
  /**
   * 获取当前操作系统信息
   * @instance 
   * @function name - getOS
   * @return {String} 
   */
  ._method('getOS', function () {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '',
      vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '',
      appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '',
      OS;
    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
  })
  /**
   * 获取滚动条距离顶部距离
   * @instance 
   * @function name - getScrollTop
   * @return {Number} 
   */
  ._method('getScrollTop', function () {
    return window.scrollY || document.documentElement.scrollTop;
  })
  /**
   * 获取滚动条距离左边距离
   * @instance 
   * @function name - getScrollLeft
   * @return {Number} 
   */
  ._method('getScrollLeft', function () {
    return window.scrollX || document.documentElement.scrollLeft;
  })
  /**
   * 滚动到指定位置
   * @instance 
   * @function name - scrollTo
   * @param {Number} - x
   * @param {Number} - y
   * @return {this} 
   */
  ._method('scrollTo', function (x, y) {
    if (this._typeof(x) !== 'number' || this._typeof(y) !== 'number') throw new Error(x + ' ' + y + ' must be a number');
    window.scrollTo(x, y);
    return this;
  })
  /**
   * requestAnimationFrame函数 返回一个函数 传回调
   * @instance 
   * @function name - requestAnimate
   * @param {Function}
   * @return {Function}
   */
  ._method('requestAnimate', function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })
  /**
   * 
   * 判断是否为邮箱地址
   * @instance 
   * @function name - isEmail
   * @param  {String} - str
   * @return {Boolean} 
   */
  ._method('isEmail', function (str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
  })
  /**
   * 
   * 判断是否为身份证号
   * @instance 
   * @function name - isIdCard
   * @param  {String|Number} - str 
   * @return {Boolean}
   */
  ._method('isIdCard', function (str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  })
  /**
   * 
   * 判断是否为手机号
   * @instance 
   * @function name - isPhoneNum
   * @param  {String|Number} - str 
   * @return {Boolean} 
   */
  ._method('isPhoneNum', function (str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  })
  /**
   * 
   * 判断是否为URL地址
   * @instance 
   * @function name - isUrl
   * @param  {String} - str 
   * @return {Boolean}
   */
  ._method('isUrl', function (str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
  })
  /**
   * 
   * 现金额转中文
   * @instance 
   * @function name - digitUppercase
   * @param  {Number} - n 
   * @return {String}
   */
  ._method('digitUppercase', function (n) {
    if (this._typeof(n) !== 'number') throw new Error(n + ' must be a number');
    var fraction = ['角', '分'],
      digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
      ],
      unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
      ],
      s = '';
    for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = '';
      for (var j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整');
  })
  /**
   * 获取当前时间 当前距离1970/1/1 午夜距离该日期时间的毫秒数；
   * @instance 
   * @function name - getNowTime
   * @return {Number}
   */
  ._method('getNowTime', function () {
    return Date.parse(new Date());
  })
  /**
   * 格式化startTime距现在的已过时间
   * @instance 
   * @function name - formatPassTime
   * @param  {Date} - startTime 
   * @return {String}
   */
  ._method('formatPassTime', function (startTime) {
    var currentTime = Date.parse(new Date()),
      formatTime,
      time = currentTime - startTime,
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
    formatTime = year ? year + "年前" : month ? month + "个月前" : day ? day + "天前" : hour ? hour + "小时前" : min ? min + "分钟前" : '刚刚';
    return formatTime;
  })
  /**
   * 动态加载script标签
   * @instance
   * @function name - loadScript
   * @param  {String} - url
   * @param  {Function} - callback
   * @return  {this}
   */
  ._method('loadScript', function (url, callback) {
    var script = document.createElement("script"),
      readys = script.readyState;
    script.type = "text/javascript";

    if (readys) {
      script.onreadystatechange = function () {
        if (readys === 'loaded' || readys === 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      }
      this.loadScript = function () {
        script.onreadystatechange = function () {
          if (readys === 'loaded' || readys === 'complete') {
            script.onreadystatechange = null;
            callback();
          }
        }
      }

    } else {
      script.onload = function () {
        callback();
      }
      this.loadScript = function () {
        script.onload = function () {
          callback();
        }
      }
    }
    script.src = url || null;
    document.getElementsByTagName('body')[0].appendChild(script);
    return this;
  })
  /**
   * @instance
   * @function name - xhrRequest
   * @param  {String} - url
   * @param  {String} - method
   * @param  {Function} - cb
   * @param  {String|Object} - data
   * @param  {Boolean} - async
   * @return  {this}
   */
  ._method('xhrRequest', function (url, method, cb, data, async) {
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    method = method.toUpperCase();
    async = async || true;
    if (method === 'GET') {
      xhr.open(method, url + '?cb=' + cb + '&' + data, async);
      xhr.send();
    } else if (method === 'POST') {
      xhr.open(method, url, async);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(data);
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) cb(xhr.responseText);
      }
    }
    return this;
  })
  /**
   * 反转单词字符串
   * @instance
   * @function name - reverseWord
   * @param  {String} str
   */
  ._method('reverseWord', function (str) {
    return str.split(' ').map(function (item) {
      return item.split('').reverse().join('')
    }).join(' ')

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
   * Swap array elements in place
   * Runtime: O(1)
   * @param  {array} arr
   * @param  {integer} from index of the first element
   * @param  {integer} to index of the 2nd element
   */
  FunSpace.swap = function (arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
  }

  /**
   * 判断2个数组是否一样
   * @static Array的静态方法
   * @instance 
   * @function name - arrayEqual 
   * @param {Array} - arr
   * @param {Array} - other
   * @return {Boolean}
   */
  Array.arrayEqual = function (arr, other) {
    if (FunSpace.prototype._typeof(other) !== 'array' || FunSpace.prototype._typeof(arr) !== 'array') throw new Error(arr + ' ' + other + ' must be a array')
    if (arr.length === other.length) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== other[i]) return false
      }
      return true;
    }
    return false;
  }
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
        return this.indexOf(item, n) !== -1;
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
      return Object.prototype.toString.call(i).slice(8, -1) === "Array";
    };
  }
  /**
   * 数组去重
   * @function name - unique
   * @instance 
   * @return {Array}
   */
  Array._method('unique', function () {
    var newArr = [];
    this.forEach(function (ele) {
      newArr.includes(ele) === -1 && newArr.push(ele);
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
    if (!dimension || FunSpace.prototype._typeof(dimension) !== 'number') throw new Error(dimension + ' must be a number')
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
    if (!m || !n || FunSpace.prototype._typeof(m) !== 'number' || FunSpace.prototype._typeof(n) !== 'number') throw new Error(m + ' ' + n + ' must be a number')
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
  window._FunSpace = window.$FS = new FunSpace();
})();

// module.exports = _FunSpace;