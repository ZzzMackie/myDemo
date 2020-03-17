
/*
 * @Author: mikey.sehui 
 * @Date: 2019-04-01 11:55:43 
 * @Last Modified by: Mackie.zhengchuhui
 * @Last Modified time: 2019-11-10 18:10:43
 * 移动端腾讯手游导航栏
 * 必须有这些样式初始化
 * body {
            padding-top: 1.2rem;
            font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
 */
if (!(Function.prototype._method)){
	Function.prototype._method = function (name, fn) {
		if (!name || typeof name !== 'string') throw new Error(name + ' must be a string');
		if (!fn || typeof fn !== 'function') throw new Error(fn + ' must be a function');
		if (!this.prototype[name]) {
			this.prototype[name] = fn;
		}
		return this;
	};
}
; (function ($) {
	function Init(options) {
		this.parent = options.parent;
		this.headerDesc = options.headerDesc;//主题文字
		this.headerLogo = options.headerLogo;//logo图片src
		this.headerLogoAlt = options.headerLogoAlt;//logo图片alt
		this.headerDescText = options.headerDescText;//主题文字副标题
		this.headerLogoLink = options.headerLogoLink;//Array 链接地址 第一个是logo的链接地址，第二个是按钮的链接地址
		this.headerAppointBg = options.headerAppointBg;//按钮背景图
		this.headerMenu = options.headerMenu;// 是否需要菜单按钮
		this.headerLogoPTT = options.headerLogoPTT;//logo点击流
		this.headerAppointPTT = options.headerAppointPTT;//按钮点击流
		this.createDom();
		this.addCss();
		this.headerMenu && this.bindEvent();
	};
	Init._method('createDom', function () { //创建dom结构
		var logoDiv = $('<div class="header-logo"></div>'),
			btnDiv = $('<div class="header-btns"></div>'),
			logoH1 = $('<h1></h1>'),
			logoH1A = $(`<a href="${this.headerLogoLink[0]}" ontouchend="PTTSendClick(\'${this.headerLogoPTT.btn}\', '${this.headerLogoPTT.eng}', '${this.headerLogoPTT.ch}');"></a>`),
			logoH1AImg = $(`<img src="${this.headerLogo}" alt="${this.headerLogoAlt}">`),
			logoDesc = $('<div class="header-desc"></div>'),
			logoDescH2 = $(`<h2>${this.headerDesc ? this.headerDesc : ''}</h2>`),
			logoDescP = $(`<p>${this.headerDescText ? this.headerDescText : ''}</p>`),
			btnA = $(`<a href="${this.headerLogoLink[1]}" class="header-appoint"ontouchend="PTTSendClick('${this.headerAppointPTT.btn}', '${this.headerAppointPTT.eng}', '${this.headerAppointPTT.ch}');">${this.headerAppointPTT.ch}</a>`),
			btnUl = $('<ul></ul>');
		for (var i = 0; i < 3; i++){
			var btnUlLi = $('<li>——</li>');
			btnUlLi.appendTo(btnUl);
		}
		btnA.appendTo(btnDiv);
		this.headerMenu && btnUl.appendTo(btnDiv);//有无菜单按钮
		logoH1AImg.appendTo(logoH1A);
		logoH1A.appendTo(logoH1);
		logoH1.appendTo(logoDiv);
		logoDescH2.appendTo(logoDesc);
		this.headerDescText && logoDescP.appendTo(logoDesc);//有无副标题
		logoDesc.appendTo(logoDiv);
		logoDiv.appendTo(this.parent);
		btnDiv.appendTo(this.parent);
	}),

	Init._method('addCss', function () {
		$(this.parent).css({
			width: '100vw',
			height: '1.2rem',
			display: 'flex',
			backgroundColor: '#202020',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '0 .3rem',
			boxSizing: 'border-box',
			color: '#fff',
			zIndex: 11,
			position: 'fixed',
			top: 0,
			left: 0
		});
		$('.header-logo', this.parent).css({
			display: 'flex',
			alignItems: 'center'
		});
		$('.header-logo h1', this.parent).css({
			width: '1rem',
			height: '1rem'
		});
		$('.header-logo h1 a', this.parent).css({
			width: '100%',
			height: '100%',
			display: 'block'
		});
		$('.header-logo h1 a img', this.parent).css({
			width: '100%',
			height: '100%'
		});
		$('.header-desc', this.parent).css({
			marginLeft: '.2rem',
			lineHeight: 1
		});
		$('.header-desc h2', this.parent).css({
			fontSize: '.34rem',
			fontWeight: 500,
			lineHeight: 1
		});
		$('.header-desc p', this.parent).css({
			fontSize: '.24rem',
			color: '#8b8b8b'
		});
		$('.header-btns', this.parent).css({
			display: 'flex',
			alignItems: 'center'
		});
		$('.header-appoint', this.parent).css({
			width: '2.03rem',
			paddingTop: '.6rem',
			height: 0,
			overflow: 'hidden',
			textAlign: 'center',
			background: `url(${this.headerAppointBg}) no-repeat 0 0/100% 100%`
		});
		$('.header-btns ul', this.parent).css({
			width: '.53rem',
			height: '.4rem',
			padding: '.2rem .1rem',
			marginLeft: '.1rem',
			flexDirection: 'column'
		});
		$('.header-btns ul li', this.parent).css({
			width: '100%',
			height: '.04rem',
			backgroundColor: '#fff',
			textIndent: '-9999rem',
			boxSizing: 'border-box',
			transition: 'all .5s'
		});
		$('.header-btns ul li:not(:first-child)', this.parent).css({
			marginTop: '.15rem'
		});
	}),
	Init._method('addTransform', function () { //添加变形
		$('.header-btns ul.open li:nth-child(1)', this.parent).css({
			transformOrigin: 'left center',
			transform: 'rotateZ(45deg)'
		});
		$('.header-btns ul.open li:nth-child(3)', this.parent).css({
			transformOrigin: 'left center',
			transform: 'rotateZ(-45deg)'
		});
		$('.header-btns ul.open li:nth-child(2)', this.parent).css({
			opacity: 0
		});
	});
	Init._method('removeTransform', function () { //移除变形
		$('.header-btns ul li:nth-child(1)', this.parent).css({
			transformOrigin: 'left center',
			transform: 'rotateZ(0deg)'
		});
		$('.header-btns ul li:nth-child(3)', this.parent).css({
			transformOrigin: 'left center',
			transform: 'rotateZ(0deg)'
		});
		$('.header-btns ul li:nth-child(2)', this.parent).css({
			opacity: 1
		});
	});
	Init._method('bindEvent', function () { //菜单点击事件
		var self = this;
		$('.header-btns ul').on('click', function () {
			$(this).toggleClass('open');
			if ($(this).hasClass('open')){
				self.addTransform();
			} else {
				self.removeTransform();
			}
		});
	});
	$.fn.extend({
		navHeader: function (options) {
			options.parent = this;
			var navHeader = new Init(options);
		}
	});
}(jQuery));
(function ($) {
	function Init(options) {
		this.parent = options.parent;
		this.headerDesc = options.headerDesc;//主题文字
		this.headerLogo = options.headerLogo;//logo图片src
		this.headerLogoAlt = options.headerLogoAlt;//logo图片alt
		this.headerDescText = options.headerDescText;//主题文字副标题
		this.headerLogoLink = options.headerLogoLink;//Array 链接地址 第一个是logo的链接地址，第二个是按钮的链接地址
		this.headerAppointBg = options.headerAppointBg;//按钮背景图
		this.headerMenu = options.headerMenu;// 是否需要菜单按钮
		this.headerLogoPTT = options.headerLogoPTT || 'btn';
		this.headerAppointPTT = options.headerAppointPTT || 'btn';
		this.createDom();
		this.addCss();
		this.headerMenu && this.bindEvent();
	};
	Init._method('createDom', function () {
		var logoDiv = $('<div class="header-logo"></div>'),
			btnDiv = $('<div class="header-btns"></div>'),
			logoH1 = $('<h1></h1>'),
			logoH1A = $(`<a href="${this.headerLogoLink[0]}" ontouchend="PTTSendClick(${this.headerLogoPTT},'logo','logo');"></a>`),
			logoH1AImg = $(`<img src="${this.headerLogo}" alt="${this.headerLogoAlt}">`),
			logoDesc = $('<div class="header-desc"></div>'),
			logoDescH2 = $(`<h2>${this.headerDesc ? this.headerDesc : ''}</h2>`),
			logoDescP = $(`<p>${this.headerDescText ? this.headerDescText : ''}</p>`),
			btnA = $(`<a href="${this.headerLogoLink[1]}" class="header-appoint"ontouchend="PTTSendClick(${this.headerAppointPTT},'appoint','立即预约');">立即预约</a>`),
			btnUl = $('<ul></ul>');
		for (var i = 0; i < 3; i++){
			var btnUlLi = $('<li>——</li>');
			btnUlLi.appendTo(btnUl);
		}
		btnA.appendTo(btnDiv);
		this.headerMenu && btnUl.appendTo(btnDiv);
		logoH1AImg.appendTo(logoH1A);
		logoH1A.appendTo(logoH1);
		logoH1.appendTo(logoDiv);
		logoDescH2.appendTo(logoDesc);
		this.headerDescText && logoDescP.appendTo(logoDesc);
		logoDesc.appendTo(logoDiv);
		logoDiv.appendTo(this.parent);
		btnDiv.appendTo(this.parent);
	}),

	Init._method('addCss', function () {
        
	}),
	Init._method('addTransform', function () {
        
	});
	Init._method('removeTransform', function () {
       
	});
	Init._method('bindEvent', function () {
		var self = this;
	});
	$.fn.extend({
		diaDown: function (options) {
			options.parent = this;
			var diaDown = new Init(options);
		}
	});
}(jQuery));
(function ($) {
	if (!(Function.prototype._method)){
		Function.prototype._method = function (name, fn) {
			if (!name || typeof name !== 'string') throw new Error(name + ' must be a string');
			if (!fn || typeof fn !== 'function') throw new Error(fn + ' must be a function');
			if (!this.prototype[name]) {
				this.prototype[name] = fn;
			}
			return this;
		};
	}
	/**
	 * [Init 按钮动画插件]
	 *	依赖jq库 css文件
	 * @param   {[Object]}  options  [options 插件选项]
	 * @example $('body').btnAnimate({parent：'.xxx',dataText:'再来一瓶',isBlank:'_blank',href:'www.baidu.com',animateType:1,otherClass:'fk_lll ccc',rel:'nofollow',resetStyle:'true',btnStyle:{w:500}})
	 * @parent 默认为选择器选中得元素既$('body').btnAnimate();// 这里是body
	 * 暂时是建站官网用到得2种按钮动画
	 */
	function Init(options) {
		this.parent = options.parent || 'body';
		this.dataText = options.dataText || '免费拥有';
		this.isBlank = options.isBlank || '_blank';
		this.href = options.href || 'javascript：void(0)';
		this.animateType = options.animateType || 0;// 按钮动画样式
		this.otherClass = options.otherClass || '';// 如需更改按钮样式则可以传入class 另作更改 具体更具实际操作
		this.rel = options.rel || '';
		this.resetStyle = options.resetStyle || false;// 自定义样式开启  hover样式通过css修改
		this.clickEvent = options.clickEvent;
		this.createDataTextList();
		this.createAnimateZero();
		this.createAnimateOne();
		this.createDom();
		if (this.resetStyle){ // 最好是通过新增类名修改样式 避免动态操作样式 如果少的话可以忽略不记
			this.btnStyle = options.btnStyle || {};// 这是一个对象 里面得属性以css属性开头首字母小写 如果是font-size 则为fs
			this.addCss();
		}
		this.bindEvent();
	};

	Init._span = '';

	Init._containerZero = '';

	Init._containerOne = '';

	Init._method('createDom', function () { //创建dom结构
		var container = '';
		switch (this.animateType) {
			case 0:
				container = Init._containerZero;
				break;
			case 1:
				container = Init._containerOne;
				break;
		}
		$(this.parent).append(container);
		return this;
	})._method('createAnimateZero', function () {
		Init._containerZero = '<div class="fk_button_zero hoverable' + this.otherClass + '"><div class="anim"></div><span>' + this.dataText + '</span> </div>';
		return this;
	})._method('createAnimateOne', function () {
		Init._containerOne += '<a class="fk_button_one button--nina ' + this.otherClass + '" rel="' + this.rel + '" data-text="' + this.dataText + '" href="' + this.href + '" target="' + this.isBlank + '">';
		Init._containerOne += Init._span;
		Init._containerOne += '</a>';
		return this;
	})._method('createDataTextList', function () {
		var len = this.dataText.length;
		for (var i = 0; i < len; i++) {
			Init._span += '<span>' + this.dataText[i] + '</span>';
		}
		return this;
	})._method('addCss', function () {
		switch (this.animateType) {
			case 0:
				this.addZeroStyle();
				// this.resetHoverStyle && this.hoverStyleEvent('.fk_button_zero');
				break;
			case 1:
				this.addOneStyle();
				// this.resetHoverStyle && this.hoverStyleEvent('.fk_button_one');
				break;
		}
		return this;
	})._method('addZeroStyle', function () {
		this.btnStyle.w && this.changeStyle('.fk_button_zero', 'width', '' + this.btnStyle.w + 'px');
		this.btnStyle.h && this.changeStyle('.fk_button_zero', 'height', '' + this.btnStyle.h + 'px');
		this.btnStyle.t && this.changeStyle('.fk_button_zero', 'top', '' + this.btnStyle.t + 'px');
		this.btnStyle.l && this.changeStyle('.fk_button_zero', 'left', '' + this.btnStyle.l + 'px');
		this.btnStyle.b && this.changeStyle('.fk_button_zero', 'border', '' + this.btnStyle.b + '');
		this.btnStyle.c && this.changeStyle('.fk_button_zero', 'color', '' + this.btnStyle.c + '');
		this.btnStyle.br && this.changeStyle('.fk_button_zero', 'border-radius', '' + this.btnStyle.br + 'px');
		this.btnStyle.bc && this.changeStyle('.fk_button_zero', 'background-color', '' + this.btnStyle.bg + '');
		this.btnStyle.fs && this.changeStyle('.fk_button_zero', 'font-size', '' + this.btnStyle.fs + 'px');
		return this;
	})._method('addOneStyle', function () {
		this.btnStyle.w && this.changeStyle('.fk_button_one', 'width', '' + this.btnStyle.w + 'px');
		this.btnStyle.h && this.changeStyle('.fk_button_one', 'height', '' + this.btnStyle.h + 'px');
		this.btnStyle.t && this.changeStyle('.fk_button_one', 'top', '' + this.btnStyle.t + 'px');
		this.btnStyle.l && this.changeStyle('.fk_button_one', 'left', '' + this.btnStyle.l + 'px');
		this.btnStyle.b && this.changeStyle('.fk_button_one', 'border', '' + this.btnStyle.b + '');
		this.btnStyle.c && this.changeStyle('.fk_button_one', 'color', '' + this.btnStyle.c + '');
		this.btnStyle.br && this.changeStyle('.fk_button_one', 'border-radius', '' + this.btnStyle.br + 'px');
		this.btnStyle.bc && this.changeStyle('.fk_button_one', 'background-color', '' + this.btnStyle.bg + '');
		this.btnStyle.fs && this.changeStyle('.fk_button_one', 'font-size', '' + this.btnStyle.fs + 'px');
		this.btnStyle.span_w && this.changeStyle('.fk_button_one>span', 'width', '' + this.btnStyle.span_w + 'px');
		this.btnStyle.span_h && this.changeStyle('.fk_button_one>span', 'height', '' + this.btnStyle.span_h + 'px');
		this.btnStyle.span_c && this.changeStyle('.fk_button_one>span', 'color', '' + this.btnStyle.span_c + '');
		this.btnStyle.span_fs && this.changeStyle('.fk_button_one>span', 'font-size', '' + this.btnStyle.span_fs + 'px');
		return this;
	})._method('changeStyle', function (ele, jqCss, jqOpt) {
		$(ele, this.parent).css('' + jqCss + '', '' + jqOpt + '');
		return this;
	})._method('bindEvent', function () { //点击log事件
		if (!this.clickEvent || typeof this.clickEvent !== 'function') return this;
		switch (this.animateType) {
			case 0:
				$('.fk_button_zero', this.parent).off('click.log').on('click.log', this.clickEvent);
				break;
			case 1:
				$('.fk_button_one', this.parent).off('click.log').on('click.log', this.clickEvent);
				break;
		}
		return this;
	});
	$.fn.extend({
		btnAnimate: function (options) {
			var opt = options || {};
			opt.parent = this;
			var btnAnimate = new Init(opt);
			return this;
		}
	});
}(jQuery));