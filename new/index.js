var f = require('mine-jsku-es5');
const Mock = require('mockjs');
// global.$ = require('jquery');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);
// console.log(f._typeof(null));
const random = Mock.Random//随机对象
random.image()//生成随机图片 要是不传参数可以直接@image  basic color text name web address helper miscellaneous
// basic 数字字符串等等
random.boolean()
random.character("upper")
//date
random.date('yyyy-MM-dd')
random.time('A HH:mm:ss')
random.now()
random.datetime()
// color
random.rgba()
random.rgb()
random.hex()
random.hsl()
//text
random.paragraph()
random.paragraph( 5 )
random.paragraph( 5, 6 )//随机文本
random.cparagraph()
random.cparagraph( 5 )
random.cparagraph( 6, 7 )//随机中文
random.sentence()
random.sentence( 3 )
random.sentence( 3, 5 )//随机英文句子 
random.csentence()
random.csentence( 3 )
random.csentence( 3, 5 )//随机中文句子 
// web
random.ip()
random.domain()
random.url('https','baidu.com')
//address
random.region()//随机中国大区
random.province()
random.city()
random.county(true)//县
random.zip()//邮编
// miscellaneous
random.guid()
random.id()//身份证
random.extend({//在随机对象上扩展方法
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    },
    world: function(date) {
        var constellations = ['战力提升', '精灵养成', '技能提升', '系统玩法']
        return this.pick(constellations)
    },
    // innertitle: function(date) {
    //     var constellations = ['技能', '精灵养成', '技能提升', '系统玩法']
    //     return this.pick(constellations)
    // }
})

const data = Mock.mock({
    'list|1-10': [{
        'str': '@character',
        'id|1': /\d{5}/,
        'basic': '@boolean',
        'text': '@cparagraph',
        'web': '@url',
        'address': '@county',
        'zip': '@zip',
        'guid': '@guid',
        'email': '@email',
        'img':'@image',
        'date':'@date',
        'time': '@time',
        'desc': '@sentence',
        'title': '@ctitle',
        'constellation': '@constellation'
    }],
    'person|10': [{
        'name': {
            first: '@FIRST',
            middle: '@FIRST',
            last: '@LAST',
            full: '@first @middle @last'
        },
        'cname': '@cname',
        'age|1-100': 100,
        'color': '@color'
    }]
})
const newD = Mock.mock({
    'list|4': [{
        'title': '@world',
        'innertitle|2': [{
            'href': ['javascript:alert(\'敬请期待!!!\')','javascript:alert(\'敬请期待!!!\')','javascript:alert(\'敬请期待!!!\')'],
            'img' : ['ossweb-img/item-img.jpg','ossweb-img/item-img.jpg','ossweb-img/item-img.jpg'],
            'en-ptt': 'fb',
            'ch': '技能'
        }],

    }]
})
// console.log(JSON.stringify(data, null, 5))
console.log(JSON.stringify(newD, null, 5))
// console.log(JSON.stringify(data1, null, 5))
// Mock.mock('http://192.168.1.53:8080', 'GET', {
//     'name': '@name',
//     'age|1-100': 100,
//     'color': '@color'
// })
// $.ajax({
//     url: 'http://192.168.1.53:12306',
//     dataType: 'json',
//     data: 1,
//     sucess:function(){
        
//     }
// })