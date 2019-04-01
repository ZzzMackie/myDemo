/*
 * @Author: mikey.sehui 
 * @Date: 2019-03-21 16:35:54 
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-03-21 16:59:19
 * 3d轮播图插件
 * 使用：
 * 1.引入jq
 * 2.依赖于es6
 * 3.$('selector').swiper(object)传入一个对象
 * 4.可以传的参数{
 *      images：[], 图片地址
 *      width ：Number,图片宽度 必须宽度200
 *      height ：Number,图片高度
 *      autoTime: Number,轮播时间
 *      direction: String,(next|prev) 轮播方向
 * }
 * 5.暂时没做兼容 最好在现代浏览器下使用
 */

; (function ($) {
    class Init{
        constructor ({
            parent,
            images=[], 
            direction = 'next',
            width = 200,
            height = $(this.parent).height(),
            index = 0,
            autoTime = 2000}) {
            this.parent    =                      parent;
            this.images    =                      images;
            this.width     = width === 200 ? width : 200;
            this.height    =                      height;
            this.direction =                   direction;
            this.index     =                       index;
            this.timer     =                        null;
            this.len       =               images.length;
            this.last      =            images.length -1;
            this.count     =                           0;
            this.autoTime  =                    autoTime;
            this._createDom();
            this._addcss();
            this._initalCarousel();
            this._bindEvent();
        }
        _createDom () {
            const len =                                  this.len,
                  $l  = $('<div class="btn btn-prev">&lt;</div>'),
                  $r  = $('<div class="btn btn-next">&gt;</div>');
            for(let i = 0; i < len; i ++){
                const $img = $(`<img src="${this.images[i]}">`)
                $img.appendTo(this.parent);
            }
            $l.appendTo(this.parent);
            $r.appendTo(this.parent);
        }
        _addcss () {
            $(this.parent).css({
                position:             'relative',
                margin:              `20px auto`,
                transformStyle:    `preserve-3d`,
                perspective:             `800px`,
                height: `${this.height * 1.5}px`,
                width:     `${this.width * 5}px`,
                overflow:               'hidden',
            })
            $('img', this.parent).css({
                position:               `absolute`,
                left:                        `40%`,
	            top:                         `30%`,
	            width:                  this.width,
                height:     `${this.height - 200}`,
                transition: `all 0.5s ease-in-out`,
                transformStyle:      `preserve-3d`,
	            marginLeft:     `-${this.width/2}`,
	            marginTop:     `-${this.height/2}`,
                borderRadius:                `8px`,
                backfaceVisibility:       `hidden`,
                cursor:                  'pointer',
            })
            $('.btn', this.parent).css({
                display:                 'block',
                width:                   `100px`,
                height:                   `70px`,
                fontSize:                 `50px`,
                textAlign:              'center',
                color:                 '#5babfb',
                borderRadius:             `70px`,
                opacity:                       0,
                transition: `all 1s ease-in-out`,
                border:      `3px solid #5babfb`,
                position:             'absolute',
                bottom:                      `0`,
                cursor:                'pointer',
                zIndex:                      '1',
            })
            $('.btn.btn-prev', this.parent).css({
                left: `0`,
            })
            $('.btn.btn-next', this.parent).css({
                right: `0`,
            })
        }
        _initalCarousel () {
            const mid  = Math.floor(this.len/2),
                  $_img =   $('img', this.parent);
            let   l,
                  r;
            for (let i = 0; i < mid; i ++ ) {
                l =  this.count - i -1;
                r =  this.count + i + 1;
                if (r > this.last) {
                    r -= this.len;
                }
                $_img.eq(l).css({
                    transform: `translateX(${(-230 * (i + 1))}px) 
                                translateZ(${300 - i * 100}px) 
                                rotateY(-30deg)`,
                })
                
                $_img.eq(r).css({
                    transform: `translateX(${(230 * (i + 1))}px) 
                                translateZ(${300 - i * 100}px) 
                                rotateY(30deg)`,
                })
                $_img.removeClass('active');
            }
            $_img.eq(this.count).css({
                transform: `translateZ(400px)`,
            }).addClass('active');
        }
        _bindEvent () {
            const $_img = $('img', this.parent),
                  $_i   =   $('div', this.parent),
                  self  =                  this;
                  
            $_img.on('click',  function (e) {
                e.stopPropagation()
                if(!$(this).hasClass('active')){
                    self.count = $(this).index();
                    self._initalCarousel()
                }
                
            }).hover(this.inhandle.bind(this),this.outhandle.bind(this))

            $_i.on('click', function (e) {
                e.stopPropagation()
                if($(this).hasClass('btn-next')){
                    self.count === self.last ? self.count = 0 : self.count ++;
                    self._initalCarousel()
                }else if($(this).hasClass('btn-prev')){
                    self.count === 0 ? self.count = self.last : self.count --;
                    self._initalCarousel()
                }
            }).hover(this.inhandle.bind(this),this.outhandle.bind(this))
            

        }
        _autoplay () {
            this.timer = setInterval((e) => {
                if(this.direction === 'next'){
                    this.count ++;
                    if(this.count === this.len){
                        this.count = 0
                    }
                    this._initalCarousel()
                }else if(this.direction === 'prev'){
                    this.count --;
                    if(this.count === 0){
                        this.count = this.last
                    }
                    this._initalCarousel()
                }
            },this.autoTime)
        }
        _changeO (num) {
            $('div', this.parent).css({
                opacity:num
            })
        }
        inhandle () {
            clearInterval(this.timer);
            this._changeO(1);
        }
        outhandle () {
            this._autoplay();
            this._changeO(0);
        }
    }
    $.fn.extend({
        swiper: function (options) {
            options.parent = this;
            var swiper = new Init(options);
        }
    });
}(jQuery));