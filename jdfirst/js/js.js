$(function(){
    
    //显示下拉框
    $('#shortcut .wnav .fl .bpjc').hover(function(){
        $('#shortcut .wnav .fl .bpjc .bpjc_text').css({
            background:'#fff',
            // paddingBottom:'1px'
        }).addClass('fr_list');
        $('#shortcut .wnav .fl .bpjc .bj').fadeIn();
    },function(){
        $('#shortcut .wnav .fl .bpjc .bpjc_text').css({
            background:'none',
            // borderBottom:'none'
        }).removeClass('fr_list');
        $('#shortcut .wnav .fl .bpjc .bj').fadeOut();
    });
    //点击换位置事件
    $('#shortcut .wnav .fl .bpjc .bj .bj_top ul li').each(function(i,ele){
        var str = $(ele).html();
        $(ele).on('click',function(){
          
            $('#shortcut .wnav .fl .bpjc .bpjc_text span').html(str);
            $(this).addClass('active').siblings().removeClass('active');
        })
    })

    //myjd下拉框
    $('#shortcut .wnav .fr .nav_jd').on('mouseenter',function(){
        $('#shortcut .wnav .fr .nav_jd').css({
            background:'#fff',
            borderBottom:'1px solid #fff'
        });
        
        $('#shortcut .wnav .fr .nav_jd .myjd').show();
    }).on('mouseleave',function(){
        $('#shortcut .wnav .fr .nav_jd').css({
            background:'none',
            borderBottom:'none'
        });
        $('#shortcut .wnav .fr .myjd').hide();
    });
    //企业采购
    $('#shortcut .wnav .fr .my_qy').on('mouseenter',function(){
        $('#shortcut .wnav .fr .my_qy').css({
            background:'#fff',
            borderBottom:'1px solid #fff'
        });
       
        $('#shortcut .wnav .fr .qy').show();
    }).on('mouseleave',function(){
        $('#shortcut .wnav .fr .my_qy').css({
            background:'none',
            borderBottom:'none'
        });
        $('#shortcut .wnav .fr .qy').hide();
    });
    //客户服务
    $('#shortcut .wnav .fr .my_khfw').on('mouseenter',function(){
        $('#shortcut .wnav .fr .my_khfw').css({
            background:'#fff',
            borderBottom:'1px solid #fff'
        });
        $('#shortcut .wnav .fr .khfw').show();
    }).on('mouseleave',function(){
        $('#shortcut .wnav .fr .my_khfw').css({
            background:'none',
            borderBottom:'none'
        });
        $('#shortcut .wnav .fr .khfw').hide();
    });
    //网站导航
    $('#shortcut .wnav .fr .my_wzdh').on('mouseenter',function(){
        $('#shortcut .wnav .fr .my_wzdh').css({
            background:'#fff',
            borderBottom:'1px solid #fff'
        });
        
        $('#shortcut .wnav .fr .my_wzdh .wzdh').show();
    }).on('mouseleave',function(){
        $('#shortcut .wnav .fr .my_wzdh').css({
            background:'none',
            borderBottom:'none'
        });
        $('#shortcut .wnav .fr .my_wzdh .wzdh').hide();
    });
    // 京东手机
    $('#shortcut .wnav .fr .j_mobile').on('mouseenter',function(){
        console.log(this)
        $('#shortcut .wnav .fr .j_mobile .mobile_pop').show();
        $('#shortcut .wnav .fr .j_mobile .mobile_static').hide();
    }).on('mouseleave',function (){
        $('#shortcut .wnav .fr .j_mobile .mobile_pop').hide();
        $('#shortcut .wnav .fr .j_mobile .mobile_static').show();
    });
    //购物车
    $('.header #settleup').hover(function(){
        $(this).css('borderBottom','1px solid #fff');
        $('.header #settleup .cw_count').css('border-bottom','1px solid #fff');
        // $('.header #settleup .dropdown_layer').css('z-index','1');
        $('.header #settleup .dropdown_layer').show();
    },function(){
        $(this).css('borderBottom','1px solid #ccc');
        $('.header #settleup .cw_count').css('borde-bottom','1px solid #e3e4e5');
        // $('.header #settleup .dropdown_layer').css('border-top','1px solid #ccc');
        $('.header #settleup .dropdown_layer').hide();
    })
    //登录新闻部分
    $('.content_right_news .news_tab .news_tab_head .news_first').on('mouseenter',function(){
        $('.content_right_news .news_tab .news_tab_head .news_tab_active').css({
            transform:'translateX(0px)'
        });
        $('.tab_content_item:first').show();
        $('.tab_content_item:last').hide();
    });
    $('.content_right_news .news_tab .news_tab_head .news_last').on('mouseenter',function(){
        $('.content_right_news .news_tab .news_tab_head .news_tab_active').css({
            transform:'translateX(54px)'
        })
        $('.tab_content_item:last').show();
        
        $('.tab_content_item:first').hide();
    });
    $('.tab_content_item .news_item').hover(function(){
        
        $(this).children().css('color','red')
    },function(){
        
        $(this).children().css('color','#999')
    })

})