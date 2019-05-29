/*
 * @Author: mikey.sehui 
 * @Date: 2019-05-24 17:34:06 
 * @Last Modified by: mikey.sehui
 * @Last Modified time: 2019-05-24 17:44:57
 */

(function (){
	let oImg = $('img');
	let rNum,lNum,timer,len = oImg.length,countPlay = 0, last = oImg.length - 1;

	function init(){
		
		initalCarousel();
		bindEvent();
	};

	function initalCarousel(){
		let centerL = Math.floor(len / 2);
		for(let i = 0; i < centerL; i ++){
			lNum = countPlay - i - 1;
			rNum = countPlay + i + 1;
			console.log(lNum,rNum)
			if(rNum > last){
				rNum -= len;
			}
			oImg.eq(lNum).css({
				transform : 'translateX('+ (-200 * (i + 1)) +'px) translateZ('+ (200 - i * 100) +'px) rotateY(0deg)'
			});
			oImg.eq(rNum).css({
				transform : 'translateX('+ (200 * (i + 1)) +'px) translateZ('+ (200 - i * 100) +'px) rotateY(0deg)'
			})
			oImg.removeClass('active');
			// console.log(lNum,rNum)
		}
		oImg.eq(countPlay).css({
			transform:'translateZ(300px)'
		}).addClass('active');
	};

	function bindEvent(){
		oImg.click(function(event) {
			/* Act on the event */
			if(!$(this).hasClass('active')){
				countPlay = $(this).index();
				initalCarousel();
				// console.log(countPlay)
			};
			// console.log(countPlay)
		}).hover(function() {
			/* Stuff to do when the mouse enters the element */
			clearInterval(timer)
			$(this).css({
				'border':'1px solid #f40',
            	'borderRadius':'8px'
			})
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			// play();
			$(this).css({
            'border':'none',
            
        	})
		});
	};

	function play(){
		clearInterval(timer)
		// console.log(countPlay)
		timer = setInterval(()=>{
			// console.log(countPlay)
			if(countPlay == last){
				countPlay = 0;
			}else {
				countPlay++;
			}
			
			 // countPlay++;
			initalCarousel();
		},1500 )
	};
	init();
}());
/**
 * @param {Object} - options
 */
(function () {
	class Sw {
		constructor(options) {
			this.parent = options.parent;//Bananer图的容器选择器 - String
			this.width = options.width;//Bananer图的容器宽度 - String
			this.height = options.height;//Bananer图的容器高度  - String
			this.img = options.img;//Bananer图地址 - Array
			this.size = options.img.length;
			this.tit = options.tit; //Bananer图标题 - Array
			this.desc = options.desc;//Bananer图描述 - Array
			this.createDom();//创建dom
			this.renderCss()//渲染css
		}
		createDom() {
			const { parent, width, height, img, size, tit, desc } = this;
			try {
				const $_clr = $('<div class="clr"></div>'),
					$_bgimg = $('<div class="cr-bgimg"></div>'),//装图片
					$_titles = $('<div class="cr-titles"></div>');//装文字
				for (let i = 0; i < size; i++) {
					let $_input = $('<input id="select-img-' + (i + 1) + '" name="radio-set-1" type="radio" class="cr-selector-img-' + (i + 1) + '"/>');
					const $_label = $('<label for="select-img-' + (i + 1) + '" class="cr-label-img-' + (i + 1) + '">' + (i + 1) + '</label>'),
						$_div = $('<div></div>'),
						$_h3 = $('<h3></h3>'),
						$_tit = $('<span>' + tit[i] + '</span>'),
						$_desc = $('<span>' + desc[i] + '</span>');
					if (i === 0) {
						$_input = $('<input id="select-img-' + (i + 1) + '" name="radio-set-1" type="radio" class="cr-selector-img-' + (i + 1) + '" checked/>');
					}
					for (let j = 0; j < size; j++) {
						const $_span = $('<span>Slice ' + (i + 1) + ' - Image ' + (j + 1) + '</span>')
						$($_div).append($_span)
					}

					$(parent).append($_input)
						.append($_label)
					$($_h3).append($_tit)
					$($_h3).append($_desc)
					$($_bgimg).append($_div)
					$($_titles).append($_h3)
				}
				$(parent).append($_clr)
					.append($_bgimg)
					.append($_titles)

			} catch (error) {
				throw new Error(error);
			}
		}
		renderCss() {
			const { parent, width, height, img, size } = this;
			try {
				$(parent).css({
					width: `${width}px`,
					height: `${height}px`,
					position: `relative`,
					margin: `0 auto`,
					border: `20px solid #fff`,
					boxShadow: `1px 1px 3px rgba(0, 0, 0, 0.1)`
				})
				$('label', parent).css({
					textAlign: `center`,
					fontStyle: `italic`,
					width: `${width / size}px`,
					height: `${width / size / 5}px`,
					cursor: `pointer`,
					color: `#fff`,
					lineHeight: `${width / size / 5}px`,
					fontSize: `24px`,
					float: `left`,
					position: `relative`,
					marginTop: `${height - 50}px`,
					zIndex: 1000
				})
				$('input', parent).css({
					display: `none`
				})
				$('.cr-bgimg', parent).css({
					width: `${width}px`,
					height: `${height}px`,
					position: `absolute`,
					left: `0px`,
					top: `0px`,
					zIndex: 1,
					display: `flex`,
					backgroundRepeat: `no-repeat`,
					backgroundPosition: `0 0`,
					backgroundSize: `100% 100%`
				})
				$('.cr-bgimg div', parent).css({
					flex: 1,
					position: `relative`,
					float: `left`,
					overflow: `hidden`,
					backgroundRepeat: `no-repeat`
				})
				$('.cr-bgimg div span', parent).css({
					position: `absolute`,
					width: `100%`,
					height: `100%`,
					top: `0px`,
					left: `-${width / size}px`,
					zIndex: 2,
					textIndent: `-9000px`
				})
				for (let i = 0; i < size; i++) {
					$('.cr-bgimg div:nth-child(' + (i + 1) + ') span', parent).css({
						backgroundPosition: `-${width * i / size}px 0px`
					})
				}
				$('.cr-titles h3', parent).css({
					position: `absolute`,
					width: `100%`,
					textAlign: `center`,
					top: `50%`,
					zIndex: 10000,
					opacity: 0,
					color: `#fff`,
					textShadow: `1px 1px 1px rgba(0, 0, 0, 0.1)`,
					transition: `opacity 0.8s ease-in-out`
				})

				$('.cr-titles h3 span:nth-child(1)', parent).css({
					fontFamily: `'BebasNeueRegular', 'Arial Narrow', Arial, sans - serif`,
					fontSize: `70px`,
					display: `block`,
					letterSpacing: `7px`
				})

				$('.cr-titles h3 span:nth-child(2)', parent).css({
					letterSpacing: `0px`,
					display: `block`,
					background: `rgba(104, 171, 194, 0.9)`,
					fontSize: `14px`,
					padding: `10px`,
					fontStyle: `italic`,
					fontFamily: `Cambria, Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif`
				})

			} catch (error) {
				throw new Error(error)
			}
		}
	}
	window.Sw = Sw;
}())
