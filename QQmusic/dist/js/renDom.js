'use strict';

/**
 * 渲染页面模块
 */
(function ($, root) {
	var T = 60;
	var timer = void 0;
	var allTime = 0,
	    lastPer = 0,
	    startTime = null;
	//碟片渲染
	function renDomImg(src) {
		var img = new Image();
		img.src = src;
		img.onload = function () {
			$('.image .img-box img').attr('src', src);
			root.blurImg(img, $('body'));
		};
	};
	//歌名渲染
	function renDomInfo(info) {
		var name = info.song;
		var singer = info.singer;
		var album = info.album;
		var str = '\n\t\t\t<h3 class="song-name">' + name + '</h3>\n        \t<p>' + singer + '</p>\n        \t<p>' + album + '</p>';
		$('.song-info').html(str);
	};
	//收藏渲染
	function renDomIsLike(like) {
		if (like) {
			$('.likes').addClass('like');
		} else {
			$('.likes').removeClass('like');
		}
	};
	//菜单列表渲染
	function renDomList(data) {
		data.forEach(function (ele) {
			var name = ele.song;
			var singer = ele.singer;
			var str = $('<li><div><span>' + name + '</span><span>-' + singer + '</span></div></li>');
			$('.item-list').append(str);
		});
	};
	//进度条总时间
	function renDomTime(data) {
		allTime = data;
		var time = getTime(data);
		$('.end-time').html(time);
		lastPer = 0;
	};
	//秒数格式化
	function getTime(t) {
		t = Math.round(t);
		var M = Math.floor(t / T);
		var S = t - M * T;
		if (M < 10) {
			M = '0' + M;
		}
		if (S < 10) {
			S = '0' + S;
		}
		return M + ':' + S;
	}
	//开始播放
	function start(t) {
		lastPer = t === undefined ? lastPer : t;
		//获取开始播放时间戳
		startTime = new Date().getTime();
		//动画
		function frame() {
			//当前播放时间戳
			var sTime = new Date().getTime();
			//已经播放时间百分比
			var perTime = lastPer + (sTime - startTime) / (allTime * 1000);
			//渲染进度条
			upDate(perTime);
			timer = requestAnimationFrame(frame);
		}
		frame();
	};
	//暂停播放
	function stop() {
		cancelAnimationFrame(timer);
		//获取暂停时间戳
		var cTime = new Date().getTime();
		//暂停时已经播放时长百分比
		var per = (cTime - startTime) / (allTime * 1000);
		//赋值给上一次播放时间
		lastPer += per;
	};
	//渲染时间进度条
	function upDate(per) {
		var cTime = per * allTime;
		cTime = getTime(cTime);
		$('.start-time').html(cTime);
		var X = (per - 1) * 100 + '%';
		$('.pro-top').css({
			transform: 'translateX(' + X + ')'
		});
	};
	root.boot = {
		start: start,
		stop: stop,
		upDate: upDate
	};
	root.renDomList = function (data) {
		renDomList(data);
	};

	root.renDom = function (data) {
		renDomImg(data.image);
		renDomTime(data.duration);
		renDomInfo(data);
		renDomIsLike(data.isLike);
	};
})(window.Zepto, window.player || (widnow.player = {}));