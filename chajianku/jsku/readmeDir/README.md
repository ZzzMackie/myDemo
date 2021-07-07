## Functions

<dl>
<dt><a href="#name - _method">name - _method()</a> ⇒ <code>this</code></dt>
<dd><p>在Function的原型链上扩展的方法用来给构造函数原型添加方法的函数</p>
</dd>
</dl>

<a name="name - _method"></a>

## name - \_method() ⇒ <code>this</code>
在Function的原型链上扩展的方法用来给构造函数原型添加方法的函数

**Kind**: global function  
**Extends**: <code>Function</code>  
**Examples**: Array._method('is',function(){})  

| Type | Description |
| --- | --- |
| <code>string</code> | name |
| <code>function</code> | fn |

<a name="FunSpace"></a>

## .FunSpace
**Kind**: instance class  
<a name="new_FunSpace_new"></a>

### new FunSpace()
一个构造函数

<a name="- _FunSpace $FS"></a>

## .- \_FunSpace $FS : <code>object</code>
一个命名空间 定义了一个全局的实例对象 可以调用对象里的方法

**Kind**: instance namespace  
**Examples**: _FunSpace._typeof(null)  
<a name="name - orientationDetect"></a>

## .name - orientationDetect()
横竖屏判断

**Kind**: instance function  
<a name="name - curry"></a>

## .name - curry() ⇒ <code>function</code>
柯里化函数

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>function</code> | fn |
| <code>Number</code> | length |

<a name="name - memoizer"></a>

## .name - memoizer() ⇒ <code>function</code>
生成一个记忆函数

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | memo |
| <code>function</code> | formula |

<a name="name - throttle"></a>

## .name - throttle() ⇒ <code>function</code>
函数节流

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>function</code> | func |
| <code>Number</code> | wait |

<a name="name - returnWeekday"></a>

## .name - returnWeekday() ⇒ <code>String</code>
今天星期几

**Kind**: instance function  
<a name="name - debounce"></a>

## .name - debounce() ⇒ <code>function</code>
函数防抖

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>function</code> | func |
| <code>Number</code> | wait |

<a name="name - addEvent"></a>

## .name - addEvent() ⇒ <code>this</code>
事件函数

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Dom</code> | dom |
| <code>String</code> | type |
| <code>function</code> | fn |
| <code>Boolean</code> | m |

<a name="name - removeEvent"></a>

## .name - removeEvent() ⇒ <code>this</code>
取消事件函数

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Dom</code> | dom |
| <code>String</code> | type |
| <code>function</code> | fn |
| <code>Boolean</code> | m |

<a name="name - _typeof"></a>

## .name - \_typeof() ⇒ <code>String</code>
改进typeof方法

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>\*</code> | value |

<a name="name - trimEnd"></a>

## .name - trimEnd() ⇒ <code>String</code>
去掉字符串尾巴空格

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | str |

<a name="name - deepClone"></a>

## .name - deepClone() ⇒ <code>Object</code>
对象深拷贝

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>\*</code> | origin |
| <code>\*</code> | target |

<a name="name - inherit"></a>

## .name - inherit() ⇒ <code>this</code>
原型链继承

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>function</code> | son |
| <code>function</code> | dad |

<a name="name - shuffle"></a>

## .name - shuffle() ⇒ <code>String</code>
n&1===0为偶数Fisher–Yates洗牌算法

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

<a name="name - quickSort"></a>

## .name - quickSort() ⇒ <code>Array</code>
快速排序Runtime: O(n) 不稳定

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

<a name="name - bubbleSort Runtime_ O(n^2) 稳定"></a>

## .name - bubbleSort Runtime: O(n^2) 稳定() ⇒ <code>Array</code>
冒泡排序

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

<a name="name - insertionSort"></a>

## .name - insertionSort() ⇒ <code>Array</code>
插入排序Runtime: O(n^2) 稳定

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

<a name="name - selectionSort"></a>

## .name - selectionSort() ⇒ <code>Array</code>
选择排序Runtime: O(n^2) 不稳定

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

<a name="name - isEmpty"></a>

## .name - isEmpty() ⇒ <code>Boolean</code>
判断是否为空

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> \| <code>Object</code> \| <code>String</code> | data |

**Example**  
```js
isEmpty() // => true isEmpty([]) // => true isEmpty({}) // => true isEmpty('') // => true isEmpty([8, 9, 6]) // => false isEmpty('text') // => false isEmpty({a: 1}) // => false
```
<a name="name - isEmpty"></a>

## .name - isEmpty() ⇒ <code>Boolean</code>
数组是否有重复性Runtime: O(n)

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | data |

**Example**  
```js
hasDuplicates([]); //↪️ false hasDuplicates([1, 1]); //↪️ true hasDuplicates([1, 2]);//↪️ false
```
<a name="name - randomNum"></a>

## .name - randomNum() ⇒ <code>Number</code>
生成指定范围随机数

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> | min |
| <code>Number</code> | max |

<a name="name - randomStrNum"></a>

## .name - randomStrNum() ⇒ <code>function</code>
生成n个长度的0-9随机字符串的方法

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> | n |

<a name="name - singleFun"></a>

## .name - singleFun() ⇒ <code>FUnction</code>
生成单例函数

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>function</code> | fn |

<a name="name - isPalindrome"></a>

## .name - isPalindrome() ⇒ <code>Boolean</code>
检测是否是回文串字符串

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | str |

<a name="name - reverseString"></a>

## .name - reverseString() ⇒ <code>String</code>
反转字符串不用reverse方法解决

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | str |

<a name="name - newArray"></a>

## .name - newArray() ⇒ <code>Array</code>
转换类数组

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Object</code> | arr |

<a name="name - hasClass"></a>

## .name - hasClass() ⇒ <code>Boolean</code>
判断元素是否有某个class

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>HTMLElement</code> | ele |
| <code>String</code> | cls |

<a name="name - addClass"></a>

## .name - addClass() ⇒ <code>this</code>
元素添加class

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>HTMLElement</code> | ele |
| <code>String</code> | cls |

<a name="name - removeClass"></a>

## .name - removeClass() ⇒ <code>this</code>
元素移除class

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>HTMLElement</code> | ele |
| <code>String</code> | cls |

<a name="name - setCookie"></a>

## .name - setCookie() ⇒ <code>this</code>
设置cookie

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | name |
| <code>String</code> | value |
| <code>Number</code> | days |

<a name="name - getCookie"></a>

## .name - getCookie() ⇒ <code>Boolean</code>
获得cookie

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | name |

<a name="name - removeCookie"></a>

## .name - removeCookie() ⇒ <code>this</code>
移除cookie

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | name |

<a name="name - getExplore"></a>

## .name - getExplore() ⇒ <code>String</code>
获取当前浏览器信息

**Kind**: instance function  
<a name="name - getOS"></a>

## .name - getOS() ⇒ <code>String</code>
获取当前操作系统信息

**Kind**: instance function  
<a name="name - getScrollTop"></a>

## .name - getScrollTop() ⇒ <code>Number</code>
获取滚动条距离顶部距离

**Kind**: instance function  
<a name="name - getScrollLeft"></a>

## .name - getScrollLeft() ⇒ <code>Number</code>
获取滚动条距离左边距离

**Kind**: instance function  
<a name="name - scrollTo"></a>

## .name - scrollTo() ⇒ <code>this</code>
滚动到指定位置

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> | x |
| <code>Number</code> | y |

<a name="name - requestAnimate"></a>

## .name - requestAnimate() ⇒ <code>function</code>
requestAnimationFrame函数 返回一个函数 传回调

**Kind**: instance function  

| Type |
| --- |
| <code>function</code> | 

<a name="name - isEmail"></a>

## .name - isEmail() ⇒ <code>Boolean</code>
判断是否为邮箱地址

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | str |

<a name="name - isIdCard"></a>

## .name - isIdCard() ⇒ <code>Boolean</code>
判断是否为身份证号

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> \| <code>Number</code> | str |

<a name="name - isPhoneNum"></a>

## .name - isPhoneNum() ⇒ <code>Boolean</code>
判断是否为手机号

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> \| <code>Number</code> | str |

<a name="name - isUrl"></a>

## .name - isUrl() ⇒ <code>Boolean</code>
判断是否为URL地址

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | str |

<a name="name - digitUppercase"></a>

## .name - digitUppercase() ⇒ <code>String</code>
现金额转中文

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> | n |

<a name="name - getNowTime"></a>

## .name - getNowTime() ⇒ <code>Number</code>
获取当前时间 当前距离1970/1/1 午夜距离该日期时间的毫秒数；

**Kind**: instance function  
<a name="name - formatPassTime"></a>

## .name - formatPassTime() ⇒ <code>String</code>
格式化startTime距现在的已过时间

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Date</code> | startTime |

<a name="name - loadScript"></a>

## .name - loadScript() ⇒ <code>this</code>
动态加载script标签

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | url |
| <code>function</code> | callback |

<a name="name - xhrRequest"></a>

## .name - xhrRequest() ⇒ <code>this</code>
**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>String</code> | url |
| <code>String</code> | method |
| <code>function</code> | cb |
| <code>String</code> \| <code>Object</code> | data |
| <code>Boolean</code> | async |

<a name="name - reverseWord"></a>

## .name - reverseWord(str)
反转单词字符串

**Kind**: instance function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="name - encodeBase64"></a>

## .name - encodeBase64(str) ⇒ <code>String</code>
编码base64

**Kind**: instance function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="name - decodeBase64"></a>

## .name - decodeBase64(str) ⇒ <code>String</code>
解码base64

**Kind**: instance function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="name - arrayEqual"></a>

## .name - arrayEqual() ⇒ <code>Boolean</code>
判断2个数组是否一样

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |
| <code>Array</code> | other |

<a name="name - includes"></a>

## .name - includes() ⇒ <code>Boolean</code>
原生includes

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> \| <code>String</code> | item |
| <code>Number</code> | n |

<a name="name - unique"></a>

## .name - unique() ⇒ <code>Array</code>
数组去重

**Kind**: instance function  
<a name="name - _dim"></a>

## .name - \_dim() ⇒ <code>Array</code>
生成一个dismension长度的每个值为initial的数组

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> | dimension |
| <code>\*</code> | initial |

<a name="name - _matrix"></a>

## .name - \_matrix() ⇒ <code>Array</code>
生成m*n矩阵数组

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Number</code> | m |
| <code>Number</code> | n |
| <code>\*</code> | initial |

