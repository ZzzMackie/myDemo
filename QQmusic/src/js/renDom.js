/**
 * 渲染页面模块
 */
(function ($,root){
	const T       =   60;
	let            timer;
	let allTime   =    0,
		lastPer   =    0,
		startTime = null;
	//碟片渲染
	function renDomImg(src){
		let img     = new  Image();
			img.src =          src;
		img.onload  = function(){
				$('.image .img-box img').attr('src',src);
				root.blurImg(img,$('body'));
			}
	};
	//歌名渲染
	function renDomInfo(info){
		let name   =   info.song;
		let singer = info.singer;
		let album  =  info.album;
		let str    = `
			<h3 class="song-name">${name}</h3>
        	<p>${singer}</p>
        	<p>${album}</p>`;
        	$('.song-info').html(str);
	};
	//收藏渲染
	function renDomIsLike(like){
		if(like){
			$('.likes').addClass('like');
		}else{
			$('.likes').removeClass('like');
		}
	};
	//菜单列表渲染
	function renDomList(data){
		data.forEach(ele=>{
			let name   =   ele.song;
			let singer = ele.singer;
			let str = $(`<li><div><span>${name}</span><span>-${singer}</span></div></li>`)
			$('.item-list').append(str);
		})
	};
	//进度条总时间
	function renDomTime(data){
		allTime = data;
		let time=getTime(data);
		$('.end-time').html(time);
		lastPer = 0;
	};
	//秒数格式化
	function getTime(t){
		t = Math.round(t);
		let M = Math.floor(t/T);
		let S =       t - M * T;
		if (M < 10) {
			M = '0'+M
		}
		if(S < 10){
			S = '0'+S;
		}
		return M+':'+S;
	}
	//开始播放
	function start(t){
		lastPer = t === undefined ? lastPer : t;
		//获取开始播放时间戳
		startTime = new Date().getTime();
		//动画
		function frame(){
			//当前播放时间戳
			let sTime = new Date().getTime();
			//已经播放时间百分比
			let perTime = lastPer+(sTime - startTime) / (allTime*1000);
			//渲染进度条
			 upDate(perTime);
			 timer = requestAnimationFrame(frame);
		}
		frame();

	};
	//暂停播放
	function stop(){
		cancelAnimationFrame(timer);
		//获取暂停时间戳
		let cTime = new Date().getTime();
		//暂停时已经播放时长百分比
		let per = (cTime - startTime) / (allTime * 1000);
		//赋值给上一次播放时间
		lastPer += per;
	};
	//渲染时间进度条
	function upDate(per){
		let cTime = per * allTime;
		cTime = getTime(cTime);
		$('.start-time').html(cTime);
		let X = (per - 1) * 100 + '%';
		$('.pro-top').css({
			transform:'translateX('+ X +')'
		})
	};
	root.boot = {
		start,
		stop,
		upDate
	}
	root.renDomList = function(data){
		renDomList(data);
	};

	root.renDom = function (data){
		renDomImg(data.image);
		renDomTime(data.duration)
		renDomInfo(data);
		renDomIsLike(data.isLike);
	};
}(window.Zepto , window.player || (widnow.player = {})))
