function init() {
    addImg();
}
init();
var flag = true;
var len, img;
// 在html结构中插入图片
function addImg() {
    for (var i = 0; i < 50; i++) {
        var src = Math.floor(Math.random() * 10);
        $('.imgBox').append('<img src="./pic/' + src + '.jpg" alt="">')
    }

    bindEvent();
}
function bindEvent() {
    img = $('img');
    len = $('img').length;
    $('.btn').on('click', function () {
        //    为btn点击加上锁
        if (!flag) {
            return;
        }
        // 完成运动图片的数量
        var endNum = 0;
        flag = false;
        // 第一个运动环节 将每一张图片延迟不同时间进行缩小显示
        for (var i = 0; i < len; i++) {
            // 立即执行函数   解决闭包问题
            (function (i) {
                // 利用setTimeout延迟
                setTimeout(function () {
                    // 每一张图片调用运动函数
                    monition(img[i], '1s', function () {
                        // 第一个运动缩小
                        $(this).css('transform', 'scale(0)')
                    }, function () {
                        // 每一张图片缩小后  回调函数 放大回到原位置
                        monition(this, '1s', function () {
                            $(this).css({
                                'transform': 'scale(1)',
                                'opacity': 0
                            })
                        }, function () {
                            // 记录所有图片完成个数
                            endNum++;
                            // 如果所有的图片都完成前两阶段运动  执行最后图片展示     
                            if (endNum == len) {
                                show();
                            }
                        })
                    })
                }, Math.random() * 1000);
            })(i)
        }
    })
};
// 最终全部展示图片
function show() {
    // console.log(123)
    var allEnd = 0;
    for (var i = 0; i < len; i++) {
        $(img[i]).css({
            'transition': '',
            // 先将图片向后移动一段距离作为旋转半径
            'transform': 'rotateY(0deg) translateZ(-' + Math.random() * 500 + 'px)'
        });
        (function (i) {
            setTimeout(function () {
                console.log(self)
                self.monition(img[i], '2s', function () {
                    
                    $(this).css({
                        'opacity': 1,
                        'transform': 'rotateY(-360deg) translateZ(0)',
                    })
                }, function () {
                    allEnd++;
                    // 记录完成图片数量  设置flag
                    if (allEnd == len) {
                        flag = true;
                    }
                })
            }, Math.random() * 1000);
        })(i)
    }
}
// 封装运动函数
function monition(dom, time, doFun, cb) {
    $(dom).css('transition', time);
    doFun.call(dom);
    var called = true;
    // 当所有图片运动完之后将锁打开
    $(dom).on('transitionend', function () {
        if (called) {
            cb && cb.call(dom);
            called = false;
        }
    })
}