
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
			if(rNum > last){
				rNum -= len;
			}
			oImg.eq(lNum).css({
				transform : 'translateX('+ (-150 * (i + 1)) +'px) translateZ('+ (200 - i * 100) +'px) rotateY(30deg)'
			});
			oImg.eq(rNum).css({
				transform : 'translateX('+ (150 * (i + 1)) +'px) translateZ('+ (200 - i * 100) +'px) rotateY(-30deg)'
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
			play();
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
}())
