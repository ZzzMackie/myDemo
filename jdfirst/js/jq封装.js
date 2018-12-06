//轮播图插件
; (function ($) {
    // var oDiv = $('.wrapper'),
    // imgWidth = $('.wrapper .bg li img').width(),
    // i = 0,
    // key = false,
    // timer,
    // imgNum = $('.wrapper .bg li').length - 1,
    // oBtn = $('.btn');
    //初始函数
    function Init(options) {
        this.parent = options.parent;
        this.images = options.images;
        //轮播的方向
        this.direction = options.direction || 'next';
        //每张图片大小
        this.width = options.width || $(this.parent).width();
        this.height = options.height || $(this.parent).height();
        //自动轮播的时间
        this.autoTime = options.autoTime || 2000;
        //当前展示图片的索引值
        this.i = options.i || 0;
        //锁
        this.key = false;
        //定时器
        this.timer = null;
        //图片个数
        this.imgNum = options.images.length;
        this.createDom();
        this.addCss();
        this.bindEvent();
        this.autoMove();
        this.change();
    }
    Init.prototype.createDom = function () {
        var oUl = $('<ul class = "imageContent"></ul>');
        var oPointer = $('<div class="pointer"></div>');
        for (var i = 0; i < this.imgNum; i++) {
            $('<li><img src="' + this.images[i] + '"/></li>').appendTo(oUl);
            $('<div></div>').appendTo(oPointer);
        }
        oUl.append($('<li><img src="' + this.images[0] + '"/></li>'));
        $(this.parent).append(oUl)
            .append($('<div class="btn lbtn">&lt;</div>'))
            .append($('<div class="btn rbtn">&gt;</div>'))
            .append(oPointer)
    }
    Init.prototype.addCss = function () {
        $('.imageContent', this.parent).css({
            position: 'absolute',
            fontSize: '0px',
            width: (this.imgNum + 1) * this.width,
            left: '0'

        })
        $('.imageContent li', this.parent).css({
            width: this.width,
            height: this.height,
            display: 'inline-block'
        })
        $('.imageContent > li > img', this.parent).css({
            width: '100%',
            height: '100%',

        })
        $('.btn', this.parent).css({
            width: 50,
            height: 50,
            background: '#eee',
            position: 'absolute',
            top: '50%',
            'margin-top': -25,
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: 24,
            cursor: 'pointer',
            opacity: 0.5,
            display: 'none'
        })
        $('.btn.lbtn', this.parent).css({
            left: 0,
        })
        $('.btn.rbtn', this.parent).css({
            right: 0,
        })
        $('.pointer', this.parent).css({
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            textAlign: 'center'
        })
        $('.pointer>div', this.parent).css({
            width: 6,
            height: 6,
            display: 'inline-block',
            borderRadius: '50%',
            margin: '0 5px',
            backgroundColor: '#fff',
            cursor: 'pointer',

        })
    }
    //事件函数
    Init.prototype.bindEvent = function () {
        var self = this;
        //设置鼠标移入显示左右按钮
        $(this.parent).hover(function () {
            $('.btn', self.parent).fadeIn();
            clearInterval(self.timer);
        }, function () {
            $('.btn', self.parent).fadeOut();
            self.autoMove();
        });
        //点击左右按钮
        $(this.parent).on('click', '.btn', function (e) {

            if ($(this).hasClass('lbtn')) {
                self.move('prev');
                console.log('A')
            } else if ($(this).hasClass('rbtn')) {
                self.move('next');
                console.log('B')
            }
        });
        //点击索引圆点
        $('.pointer', self.parent).on('click', 'div', function () {
            self.move($(this).index());
        })
    }



    Init.prototype.move = function (dir) {
        //添加一个锁
        if (this.key) {
            return false;
        }

        this.key = true;
        var self = this;
        //点击左边按钮
        if (dir == 'prev') {
            if (this.i == 0) {
                this.i = this.imgNum;
                $('ul', this.parent).css('left', -this.i * this.width);
            }
            this.i--;
            $('ul', this.parent).animate({
                'left': - this.i * this.width
            }, 1000, function () {
                self.change();
                self.key = false;
            });
            //点击右边按钮
        } else if (dir == 'next') {
            if (this.i == this.imgNum) {
                this.i = 0;
                $('ul', this.parent).css('left', -this.i * this.width);
            }
            this.i++;
            $('ul', this.parent).animate({
                'left': - this.i * this.width
            }, 1000, function () {
                self.change();
                self.key = false;
            });
            //点击索引圆点
        } else if (typeof dir == 'number') {
            this.i = dir;
            $('ul', this.parent).animate({
                'left': - this.i * this.width
            }, 1000, function () {
                self.change();
                self.key = false;
            });
        }
    }
    //改变小圆点及变换图片
    Init.prototype.change = function () {
        $('.pointer > div', this.parent).css('background', '#fff');
        // $('.wrapper .bg li img').eq(i).fadeIn(300).siblings().stop(true, true).fadeOut(300);
        // $('.wrapper .pointer ul li').eq(i).addClass('active').siblings().removeClass('active');
        if (this.i == this.imgNum) {
            $(' .pointer > div', this.parent).eq(0).css('background', '#f40');
        } else {
            $(' .pointer > div', this.parent).eq(this.i).css('background', '#f40');
        }
    }
    Init.prototype.autoMove = function () {
        var self = this;
        this.timer = setInterval(function () {
            self.move('next');
        }, this.autoTime);
    }
    $.fn.extend({
        swiper: function (options) {
            options.parent = this;
            var swiper = new Init(options);

        }
    });
}(jQuery));



//多层li插件
; (function () {

    function Init(options) {
        this.parent = options.parent;
        this.data = options.data;
        this.creatDom();
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.bindEvent = function () {
        $('.cate_menu', this.parent).on('mouseenter', '.leftLi', function (e) {
            $('.menuContent[data-id=data_' + $(this).index() + ']', this.parent).show();

            $(this).css('background', '#ccc');
        }).on('mouseleave', '.leftLi', function (e) {
            $('.menuContent[data-id=data_' + $(this).index() + ']', this.parent).hide();

            $(this).css('background', 'none');
        });

        $('.menuContent li', this.parent).hover(function () {
            $(this).find('a').css('color', 'red');
        }, function () {
            $(this).find('a').css('color', '#666');
        });


        $('.menuList .cate_menu .leftLi > a', this.parent).hover(function () {
            $(this).css('color', 'red');
        }, function () {
            $(this).css('color', '#666');
        })
    }


    Init.prototype.creatDom = function () {
        var menuList = $('<div class = "menuList"></div>');
        var blockMenu = $('<ul class = "cate_menu"></ul>');

        for (var i = 0; i < this.data.length; i++) {
            var dataRow = this.data[i];

            var menuContent = $('<div class = "menuContent" id = "menuContent" data-id="data_' + i + '"></div>');
            if (dataRow.name.length == 1) {
                var leftLi = $('<li class = "leftLi"><a href = "' + this.data[i].href + '">' + dataRow.name[0].text + '</a></li>').appendTo(blockMenu);
            } else if (dataRow.name.length == 2) {
                var leftLi = $('<li class = "leftLi"><a href = "' + this.data[i].href + '">' + dataRow.name[0].text + '</a><span>/</span><a href = "' + this.data[i].href + '">' + dataRow.name[1].text + '</a></li>').appendTo(blockMenu);
            } else if (dataRow.name.length == 3) {
                var leftLi = $('<li class = "leftLi"><a href = "' + this.data[i].href + '">' + dataRow.name[0].text + '</a><span>/</span><a href = "' + this.data[i].href + '">' + dataRow.name[1].text + '</a><span>/</span><a href = "' + this.data[i].href + '">' + dataRow.name[2].text + '</a></li>').appendTo(blockMenu);
            } else if (dataRow.name.length == 4) {
                var leftLi = $('<li class = "leftLi"><a href = "' + this.data[i].href + '">' + dataRow.name[0].text + '</a><span>/</span><a href = "' + this.data[i].href + '">' + dataRow.name[1].text + '</a><span>/</span><a href = "' + this.data[i].href + '">' + dataRow.name[2].text + '</a><span>/</span><a href = "' + this.data[i].href + '">' + dataRow.name[2].text + '</a></li>').appendTo(blockMenu);
            }

            for (var j = 0; j < dataRow.detail.length; j++) {
                var itemRow = $('<ul class="itemRow"></ul>');
                var items = dataRow.detail[j].items;

                $('<li class="cateType"><a>' + dataRow.detail[j].title + '&gt;</a></li>').appendTo(itemRow);
                var itemsRight = $('<ul class= "itemsRight"></ul>')
                for (var k = 0; k < items.length; k++) {
                    $('<li class="item"><a href = "' + items[k].href + '">' + items[k].name + '</a></li>').appendTo(itemsRight);
                }
                itemRow.append(itemsRight).appendTo(menuContent);
            }
            menuContent.appendTo(leftLi);
        }
        menuList.append(blockMenu).appendTo($(this.parent));
        //左边一级菜单dom结构

    }
    Init.prototype.addCss = function () {
        $('*', this.parent).css({
            padding: 0,
            margin: 0,
            listStyle: 'none',
            textDecoration: 'none',
            fontSize: 12,
            color: '#666',
        });
        $('.menuList > .cate_menu', this.parent).css({
            width: 190,
            height: 480,
            border: '1px solid #eee',
            position: 'relative',
            background: '#fff'
        });
        $('.menuList > .cate_menu > .leftLi', this.parent).css({
            width: '100%',
            height: 26,
            textAlign: 'center',
            lineHeight: 26 + 'px',
            // border: '1px solid black',

        });
        $('.menuList > .cate_menu > .leftLi > .menuContent', this.parent).css({
            width: 780,
            height: 508,
            position: 'absolute',
            left: 190,
            top: 0,
            textAlign: 'left',
            border: '1px solid #eee',
            display: 'none',
            background: '#fff',
            zIndex: 100

        });
        $('.itemRow > ul  .item', this.parent).css({
            display: 'inline-block',
            // float:'left'
        });
        $('.itemRow > .itemsRight > .item', this.parent).css({
            height: 32,
            margin: '0 10px',
            // display:'inlin-block'
        });
        $('.itemRow ', this.parent).css({
            position: 'relative',
            verticalAlign: 'top',
            // display:'inlin-block'
        })
        $('.itemRow > .itemsRight > .item  a ', this.parent).css({
            borderLeft: '1px solid #ddd',
            padding: '0 10px',

        });
        $('.itemRow > .cateType ', this.parent).css({
            fontWeight: 900,
            width: 70,
            textAlign: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'inline-block'
        });
        $('#menuContent .itemRow .itemsRight', this.parent).css({
            display: 'inline-block',
            width: 700,
            marginLeft: 70,
        });
    }
    $.fn.extend({
        menu: function (options) {
            options.parent = this;

            new Init(options);
        }
    })
}());
//input插件

; (function () {

    function Init(options) {
        // 需要把dom结构插入到的位置
        this.parent = options.parent;
        // jsonp传递时key值  让后端返回带上的属性名
        this.key = options.key || 'callback';
        // jsonp传递时value值  让后端返回的数据据放在jsonpCallback()里面
        this.jsonpCallback = options.jsonpCallback || '';
        // 请求数据地址
        this.url = options.url;
        //  请求数据的方法
        this.type = options.type;
        this.inputWidth = options.inputWidth || $(this.parent).width() - 100;
        this.height = options.height || $(this.parent).height();
        this.fontSize = options.fontSize || 18;
        this.success = options.success;
        this.dataName = options.dataName;
        this.dataType = options.dataType || 'jsonp';
        this.btnColor = options.btnColor || '#eee';
        // 创建dom结构
        this.createDom();
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.createDom = function () {
        var oDiv = $('<div class="cj-input-content"></div>');
        var oInput = $('<input type="text" value="空气净化器" class="cj-input-search"/>');
        var oBtn = $('<input class="search-btn" type="button" value="搜索"/>');
        oDiv.append(oInput).append(oBtn).appendTo($(this.parent));
        $('<div id="searchContent"><ul></ul></div>').appendTo($(this.parent));

    }
    Init.prototype.addCss = function () {
        $('.cj-input-content', this.parent).css({
            width: '100%',
            height: '100%',
            // 弹性盒模型   用来布局
            display: 'flex',
            // 主轴方向居中（x轴）
            // justifyContent: 'center',
            // 侧轴方向居中（y轴）
            alignItems: 'center',
        })
        $('.cj-input-content > .cj-input-search', this.parent).css({
            height: this.height,
            width: this.inputWidth,
            // marginRight: 10,
            fontSize: this.fontSize,
            zIndex: 100,
            border: '1px solid transparent',
            outline: 'none'
        });
        $('.cj-input-content > .search-btn', this.parent).css({
            width: 100,
            height: this.height,
            fontSize: this.fontSize,
            zIndex: 100,
            border: '1px solid transparent',
            color: '#fff',
            outline: 'none',
            cursor: 'pointer',
            backgroundColor: this.btnColor,
            backgroundSizing: 'content-box',
        });
        $('#searchContent', this.parent).css({
            position: 'relative',
            border: '1px solid #eee',
            display: 'none',
            width: 500,
            background: '#fff',
            zIndex: 100,
            fontSize: parseInt(this.fontSize) - 4 + 'px'
        });
    }
    Init.prototype.bindEvent = function () {
        var self = this;
        var oval = $('.cj-input-content > .cj-input-search').val();
        $('.cj-input-content > .cj-input-search', this.parent).on('input', function (e) {
            $.ajax({
                type: self.type,
                url: self.url,
                success: self.success,
                data: self.dataName + '=' + $(this).val(),
                dataType: self.dataType,
                jsonp: self.key,
                async: false,
                jsonpCallback: self.jsonpCallback,
            });
        }).focus(function () {
            if ($(this).val() == '空气净化器') {
                $('.cj-input-content > .cj-input-search').val('');
                $('.cj-input-content > .cj-input-search').css('color', 'black');
            }else{
                $('.cj-input-content > .cj-input-search').val();
            }

            $(this).css({
                border: '1px solid transparent'
            })
        }).blur(function () {
            if ($(this).val() == "") {
                console.log('aaa')
                $('.cj-input-content > .cj-input-search').val('空气净化器');
                $('.cj-input-content > .cj-input-search').css('color', '#999');
            };
        });
    }
    $.fn.extend({
        inputSearch: function (options) {
            options.parent = this;
            new Init(options);
        }
    });
}())