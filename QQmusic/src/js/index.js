const root =      window.player;
let  nowIndex =               0,
        			        len,
//audio实例
        			   	      A,
//Index实例
        			   	      B,
//切歌索引
        			   	      I,
//audio实例的audio信息
        			   	      C,
//滑动进度条时间 
        			   	     cT,
//滑动进度条百分比
        			   	    per,
//碟片旋转定时器
        			   	  timer,
//最后一位数据
        			   	lastLen,
//进度条总时长
        			   duration,
//数据
        		       dataList;
//audio构造函数
const audio = root.audioManager;
//Index构造函数
const Index =     root.newIndex;

//异步获取数据
function getData(){
	return new Promise((resolve,reject)=>{
		$.ajax({
			type:'GET',
			url:'mock/data.json',
			success:function(data){
				
				resolve(data)
			},
			error:function(error){
				reject(error)
			}
		});
	});
};

getData().then(value=>{
	//获取数据赋值给全局变量
	dataList =             value;
	//获取数据长度赋值给全局变量
	len      =      value.length;
	//获取数据最后一位赋值给全局变量
	lastLen  =   value.length -1;
	//实例Index
	B        =    new Index(len);
	//实例audio
	A        =       new audio();
	//初始化数据总时长
	duration = value[0].duration;
	//A实例的audio信息
	C        =           A.audio;
	//初始化列表菜单
	root.renDomList(value);
	//初始化页面
	root.renDom(value[0]);
	//初始化歌曲信息
	A.getAudio(dataList[0].audio)
	//控制栏点击事件
	bindEvent();
	//菜单滑动事件
	touchEvent();
	//进度条拖拽事件
	dragTimer();
}).catch(error=>{
	alert('not fount ',error);
});


//控制菜单栏事件
function bindEvent(){
	//自定义页面变化事件
	$('body').on('play:change',(e,index)=>{
		//切歌时渲染当前页面和歌曲信息
		root.renDom(dataList[index]);
		A.getAudio(dataList[index].audio);
		duration = dataList[index].duration;
		if(A.status === 'play'){			
			A.play();
			//开始切歌播放时重置
			root.boot.start(0);		
			rotate(0);
		}
		//切歌时 置为0
		$('.img-box').attr('data-deg', 0);
		//重置样式
        $('.img-box').css({
            transform: 'rotateZ(' + 0 + 'deg)',
            transition: 'none'
        })
	})
	//上一首
	$('.prev').on('click',e =>{

		if(A.status === 'pause'){
			$('.play').addClass('playing');
			root.boot.start(0);
		}
		//自动播放
		A.play();
		//获取上一曲的索引
		I = B.prev();
		$('body').trigger('play:change',I);
		root.boot.stop();
	});
	//下一首
	$('.next').on('click',e =>{
		//判断当前点击是否暂停，是的话则换播放键，
		if(A.status === 'pause'){
			$('.play').addClass('playing');
			root.boot.start(0);
		}
		//切换自动播放
		A.play();
		//当前歌曲索引
		I = B.next();
		//自定义事件，传入索引
		$('body').trigger('play:change',I);
		root.boot.stop();
	});
	//播放键
	$('.play').on('click',e =>{

		//点击播放键 判断是否暂停 是则点击播放且旋转且当前data-deg有值则赋值无则请0；
		if(A.status === 'pause'){
			var deg = $('.img-box').attr('data-deg') || 0;
			rotate(deg);
			A.play();
			root.boot.start();
		}else{
			
			A.pause();
			root.boot.stop();
			clearInterval(timer);	
		};
		$('.play').toggleClass('playing');
	});
	//菜单列表
	$('.meaun').on('click', e =>{
		let item = $('.item');
		$('.meaun').toggleClass('list');
		item.toggleClass('fadein');		
	})
	//点击歌名播放当前曲
	$('li').each((index,item)=>{
		$(item).on('click',e=>{
			//获取当前歌曲渲染页面
			root.renDom(dataList[index]);
			//获取当前歌曲信息
		    A.getAudio(dataList[index].audio);
		    if(A.status === 'pause'){	    	
				$('.play').addClass('playing');
			}
			//播放时旋转碟片
			rotate(0);
		    A.play();
		    root.boot.start();
		    
		})
	})
	//点击收藏
	
	$('.likes').on('click',e =>{
		//遍历当前数据
		dataList.forEach((ele,index) => {
			//获取当前歌名
			let songName = $('.song-name').html();
			//获取当前是否有收藏样式
			let likeClass = $('.likes').hasClass('like');
			//判断当前歌曲等于哪一首歌
			if(songName == ele.song){
				//如果当前曲有收藏样式
				if(likeClass){
					//更改为false
					ele.isLike = false;
				}else {
					ele.isLike = true;
				}
			}
		})
		//收藏的切换效果
		$('.likes').toggleClass('like');
		
	})
};

//碟片旋转
function rotate(a){
	//清空定时器
	clearInterval(timer);
	//转换成数字
	let b = parseInt(a);
	timer = setInterval(()=>{
		b += 1;
		$('.img-box').attr('data-deg', b);
		$('.img-box').css({
			'transtion':'transform 0.5s linear',
			'transform':'rotateZ('+b+'deg)'
		})
	}, 100)
}
//菜单触摸事件
function touchEvent(){
	$('.item-list')
		.on('touchstart',e=>{	
			e.stopPropagation();
			//获取菜单自身的信息
			let box = $('.item').offset();
			//获取菜单自身的top值
			let boxY = box.top;
			//获取列表自身的信息
			let y = $('.item-list').offset();
			//获取菜单与列表的高度差值
			let num = y.height - box.height;
			//获取触摸点的与浏览器窗口的位置
			let touchy = e.touches[0].clientY;			
			$('.item-list').on('touchmove', e =>{
				e.stopPropagation();
				e.preventDefault()
				//获取滑动时的触摸点的位置
				let distance = e.touches[0].clientY;
				//获取滑动距离
				let nowY = distance - touchy;
				//判断上滑是否小于高度差值
				if(nowY < -num){
					$('.item-list').css({
					top:'-'+num+'px',
					
					})
					//判断下拉是否大于顶部距离
				}else if(nowY > 20){
						$('.item-list').css({
							top:'0px',							
						})
				}else{
					$('.item-list').css({
						top:nowY+'px',
						
					})
				}
			})
		})
		
}
//进度条拖拽
function dragTimer(){
	//獲取進度條的自身left
	let left  =  $('.pro-bottom').offset().left;
	
	//獲取進度條的自身width
	let width = $('.pro-bottom').offset().width;
	//小球拖拽事件
	$('.slider').on('touchstart', e => {
					//触摸时暂停
					root.boot.stop();
					A.pause();
				})//滑动
				.on('touchmove', e => {
					//滑动距离
					let x = e.touches[0].clientX - left;
					//滑动百分比
					console.log(x)
					per = x / width;
					//转换成时间
					cT = per * duration;
					//判断百分比临界值
					if (per >= 0 && per < 1) {
						//更新进度条
            			root.boot.upDate(per);
        			}

				})//触摸结束时播放音乐更新进度条改变按钮
				.on('touchend' , e => {
					if (per >= 0 && per < 1) {
            			A.playTo(cT);
						A.play();
						root.boot.start(per);
						$('.play').addClass('playing');
        			}					
				})
	//歌曲播放結束自動下一首
	

	$(C).on('ended', function () {
		
    	$('.next').trigger('click');
    	
})
}


