## Object

<dl>
<dt><a href="#name - _FunSpace">name - _FunSpace.function()</a></dt>
<dd><p>一个扩展了各种方法的对象 可以通过上面的方式去调用他的方法当然还有静态方法那是内部函数需要用到的，不能改动，否则会影响一些功能，这里还兼容了原生的一些方法比如Array.isArray,Array.prototype.indexOf,还扩展了数组的静态方法_dim,_matrix,在原型上添加了去重的方法unique</p>
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

<a name="- _FunSpace"></a>

## .- \_FunSpace : <code>object</code>
一个命名空间 返回的一个实例对象 这个就是主模块 可以调用对象里的方法

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

