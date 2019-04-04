/** 
 * @Author: mikey.zhaopeng
 * @Date: 2019-04-01 20:42:51
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-04-04 18:05:05
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
   * 生成一个记忆函数
   * @function name - memoizer
   * @instance 
   * @instance 
   * @param {Array} - memo
   * @param {Function} - formula
   * @return {Function} 
   */
  FunSpace._method("memoizer", function (memo, formula) {
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
    if (this._typeof(func) !== 'function') throw new Error(func + ' must be a function')
    if (this._typeof(wait) !== 'number') throw new Error(wait + ' must be a number')

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
  });
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
  FunSpace._method("removeEvent", function (dom, type, fn, m) {
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
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
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
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
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
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
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
    if (!str || this._typeof(str) !== 'string') throw new Error(str + ' must be a string')
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
    if (!origin || !target) throw new Error('Are you kidding me!!!');
    var target = target || {},
      toStr = Object.prototype.toString,
      arrayStr = 'Array',
      obj = "object";
    for (var key in origin) {
      if (origin.hasOwnProperty(key)) {
        if (typeof origin[key] !== obj) {
          target[key] = origin[key];
        } else if (origin[key] !== null && typeof origin[key] === obj) {
          target[key] = toStr.call(origin[key]).slice(8, -1) === arrayStr ? [] : {};
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
    if (!obj || this._typeof(obj) !== 'object') throw new Error(obj + ' must be a object')
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
    if (!son || !dad) throw new Error('Are you kidding me!!!');
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
    if (this._typeof(low) !== 'number' || this._typeof(high) !== 'number' || this._typeof(key) !== 'number' || this._typeof(arr) !== 'array') throw new Error(low + ' ' + high + ' ' + key + ' must be a number or ' + arr + 'is array');
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
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
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
   * @instance 
   * @param {Array} - arr
   * @return {Array}
   */
  FunSpace._method('bubbleSort', function (arr) {
    if (!Array.isArray(arr)) throw new Error(arr + ' must be a Array');
    var len = arr.length, temp;
    for (var i = len; i >= 2; i--) {
      for (var j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
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
    if (this._typeof(min) !== 'number' || this._typeof(max) !== 'number' || max < min) throw new Error(min + ' ' + max + ' must be a number or ' + max + '<' + min)
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
  });
  /**
   * 生成单例函数
   * @function name - singleFun 
   * @instance 
   * @param {Function} - fn
   * @return {FUnction}
   */
  FunSpace._method('singleFun', function (fn) {
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
  FunSpace._method('isPalindrome', function (str) {
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
  FunSpace._method('reverseString', function (str) {
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
   * 
   * 判断元素是否有某个class
   * @instance 
   * @function name - hasClass
   * @param {HTMLElement} - ele 
   * @param {String} - cls 
   * @return {Boolean}
   */
  FunSpace._method('hasClass', function (ele, cls) {
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
  FunSpace._method('addClass', function (ele, cls) {
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
  FunSpace._method('removeClass', function (ele, cls) {
    if (this.hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
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
  FunSpace._method('setCookie', function (name, value, days) {
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
  FunSpace._method('getCookie', function (name) {
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
  FunSpace._method('removeCookie', function (name) {
    this.setCookie(name, '', -1);
    return this;
  })
  /**
   * 获取当前浏览器信息
   * @instance 
   * @function name - getExplore
   * @return {String} 
   */
  FunSpace._method('getExplore', function () {
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
  FunSpace._method('getOS', function () {
    var userAgent  = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '',
        vendor     = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '',
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
  FunSpace._method('getScrollTop', function () {
    return window.scrollY;
  })
  /**
   * 获取滚动条距离左边距离
   * @instance 
   * @function name - getScrollLeft
   * @return {Number} 
   */
  FunSpace._method('getScrollLeft', function () {
    return window.scrollX;
  })
  /**
   * 滚动到指定位置
   * @instance 
   * @function name - scrollTo
   * @param {Number} - x
   * @param {Number} - y
   * @return {this} 
   */
  FunSpace._method('scrollTo', function (x, y) {
    if(this._typeof(x) !== 'number' || this._typeof(y) !== 'number') throw new Error(x+' '+ y +' must be a number');
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
  FunSpace._method('requestAnimate', function () {
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
  FunSpace._method('isEmail', function (str) {
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
  FunSpace._method('isIdCard', function (str) {
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
  FunSpace._method('isPhoneNum', function (str) {
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
  FunSpace._method('isUrl', function (str) {
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
  FunSpace._method('digitUppercase', function (n) {
    if(this._typeof(n) !== 'number') throw new Error(n+' must be a number');
    var fraction = ['角', '分'],
        digit    = [
                    '零', '壹', '贰', '叁', '肆',
                    '伍', '陆', '柒', '捌', '玖'
                   ],
        unit     = [
                    ['元', '万', '亿'],
                    ['', '拾', '佰', '仟']
                   ],
        s        = '';
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
  });
  /**
   * 获取当前时间 当前距离1970/1/1 午夜距离该日期时间的毫秒数；
   * @instance 
   * @function name - getNowTime
   * @return {Number}
   */
  FunSpace._method('getNowTime', function () {
    return Date.parse(new Date());
  })
  /**
   * 格式化startTime距现在的已过时间
   * @instance 
   * @function name - formatPassTime
   * @param  {Date} startTime 
   * @return {String}
   */
  FunSpace._method('formatPassTime', function (startTime) {
    var currentTime = Date.parse(new Date()),
      formatTime,
      time = currentTime - startTime,
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
      formatTime = year ? year + "年前": month ? month + "个月前" : day ? day + "天前" : hour ? hour + "小时前" : min ? min + "分钟前" : '刚刚';
    return formatTime;
  })
  window._FunSpace = window.$FS = new FunSpace();
})();

module.exports = _FunSpace;