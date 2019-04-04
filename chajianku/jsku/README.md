## Object

<dl>
<dt><a href="#name - _FunSpace">name - _FunSpace.function()</a> ⇒ <code>this</code></dt>
<dd><p>一个扩展了各种方法的对象 可以通过上面的方式去调用他的方法当然还有静态方法那是内部函数需要用到的，不能改动，否则会影响一些功能，这里还兼容了原生的一些方法比如Array.isArray,Array.prototype.indexOf,还扩展了数组的静态方法_dim,_matrix,arrayEqual在原型上添加了去重的方法unique</p>
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

## .name - removeEvent()
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

<a name="name - quickSort"></a>

## .name - quickSort() ⇒ <code>Array</code>
快速排序

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

<a name="name - bubbleSort"></a>

## .name - bubbleSort() ⇒ <code>Array</code>
冒泡排序

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |

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

<a name="name - arrayEqual"></a>

## .name - arrayEqual() ⇒ <code>Boolean</code>
判断2个数组是否一样

**Kind**: instance function  

| Type | Description |
| --- | --- |
| <code>Array</code> | arr |
| <code>Array</code> | other |

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

## .name - formatPassTime(startTime) ⇒ <code>String</code>
格式化startTime距现在的已过时间

**Kind**: instance function  

| Param | Type |
| --- | --- |
| startTime | <code>Date</code> | 

