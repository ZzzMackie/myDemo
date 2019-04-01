/*
 * @Author: mikey.sehui 
 * @Date: 2019-04-01 11:55:43 
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-04-01 14:47:34
 * 
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

; (function ($) {
    function Init(options) {
        this.parent          = options.parent;
        this.headerDesc      = options.headerDesc;//主题文字
        this.headerLogo      = options.headerLogo;//logo图片src
        this.headerLogoAlt     = options.headerLogoAlt;//logo图片alt
        this.headerDescText  = options.headerDescText;//主题文字副标题
        this.headerLogoLink  = options.headerLogoLink;//Array 链接地址 第一个是logo的链接地址，第二个是按钮的链接地址
        this.headerAppointBg = options.headerAppointBg;//按钮背景图
        this.headerMenu      = options.headerMenu;// 是否需要菜单按钮
        this.createDom();
        this.addCss();
        this.headerMenu && this.bindEvent();
        
    };
    Init.prototype.createDom = function () {
        var logoDiv = $('<div class="header-logo"></div>'),
            btnDiv  = $('<div class="header-btns"></div>'),
            logoH1  = $('<h1></h1>'),
            logoH1A = $(`<a href="${this.headerLogoLink[0]}" ontouchend="PTTSendClick('header','logo','logo');"></a>`),
            logoH1AImg = $(`<img src="${this.headerLogo}" alt="${this.headerLogoAlt}">`),
            logoDesc   = $('<div class="header-desc"></div>'),
            logoDescH2 = $(`<h2>${this.headerDesc?this.headerDesc:''}</h2>`),
            logoDescP  = $(`<p>${this.headerDescText?this.headerDescText:''}</p>`),
            btnA       = $(`<a href="${this.headerLogoLink[1]}" class="header-appoint"ontouchend="PTTSendClick('header','appoint','立即预约');">立即预约</a>`),
            btnUl      = $(`<ul></ul>`);
            for(var i = 0; i < 3; i++){
                var btnUlLi = $(`<li>——</li>`);
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
    }
    Init.prototype.addCss = function () {
        $(this.parent).css({
            width: `100vw`,
            height: `1.2rem`,
            display: `flex`,
            backgroundColor: `#202020`,
            justifyContent: `space-between`,
            alignItems: `center`,
            padding: `0 .3rem`,
            boxSizing: `border-box`,
            color: `#fff`,
            zIndex: 11,
            position: `fixed`,
            top: 0,
            left: 0
        })
        $('.header-logo', this.parent).css({
            display:`flex`,
            alignItems:`center`
        })
        $('.header-logo h1', this.parent).css({
            width: `1rem`,
            height: `1rem`
        })
        $('.header-logo h1 a', this.parent).css({
            width: `100%`,
            height: `100%`,
            display: `block`
        })
        $('.header-logo h1 a img', this.parent).css({
            width: `100%`,
            height: `100%`
        })
        $('.header-desc', this.parent).css({
            marginLeft: `.2rem`,
            lineHeight:1
        })
        $('.header-desc h2', this.parent).css({
            fontSize: `.34rem`,
            fontWeight: 500,
            lineHeight: 1
        })
        $('.header-desc p', this.parent).css({
            fontSize:`.24rem`,
            color:`#8b8b8b`
        })
        $('.header-btns', this.parent).css({
            display:`flex`,
            alignItems:`center`
        })
        $('.header-appoint', this.parent).css({
            width: `2.03rem`,
            paddingTop: `.6rem`,
            height: 0,
            overflow: `hidden`,
            textAlign: `center`,
            background: `url(${this.headerAppointBg}) no-repeat -2.6rem -4.4rem/9rem 10rem`
        })
        $('.header-btns ul', this.parent).css({
            width: `.53rem`,
            height: `.4rem`,
            padding: `.2rem .1rem`,
            marginLeft: `.1rem`,
            flexDirection: `column`
        })
        $('.header-btns ul li', this.parent).css({
            width: `100%`,
            height: `.04rem`,
            backgroundColor: `#fff`,
            textIndent: `-9999rem`,
            boxSizing: `border-box`,
            transition: `all .5s`
        })
        $('.header-btns ul li:not(:first-child)', this.parent).css({
            marginTop: `.15rem`
        })
    }
    Init.prototype.addTransform = function () {
        $('.header-btns ul.open li:nth-child(1)', this.parent).css({
            transformOrigin: `left center`,
            transform: `rotateZ(45deg)`
        })
        $('.header-btns ul.open li:nth-child(3)', this.parent).css({
            transformOrigin: `left center`,
            transform: `rotateZ(-45deg)`
        })
        $('.header-btns ul.open li:nth-child(2)', this.parent).css({
            opacity:0
        })
    }
    Init.prototype.removeTransform = function () {
        $('.header-btns ul li:nth-child(1)', this.parent).css({
            transformOrigin: `left center`,
            transform: `rotateZ(0deg)`
        })
        $('.header-btns ul li:nth-child(3)', this.parent).css({
            transformOrigin: `left center`,
            transform: `rotateZ(0deg)`
        })
        $('.header-btns ul li:nth-child(2)', this.parent).css({
            opacity:1
        })
    }
    Init.prototype.bindEvent = function () {
        var self = this;
        $('.header-btns ul').on('click',function () {
            $(this).toggleClass('open');
            if($(this).hasClass('open')){
                self.addTransform();
            }else{
                self.removeTransform();
            }
        })
    }
    $.fn.extend({
        navHeader: function (options) {
            options.parent = this;
            var navHeader = new Init(options);
        }
    });
})(jQuery)