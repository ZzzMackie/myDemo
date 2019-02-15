/**
 * @author：Mikey
 * @time：2019-01-25
 * 
 * 1.定义一个对象，一个小球工厂
 * 2.获取相关元素以及定义变量，游戏区域对象
 * 3.初始化函数init
 * 4.玩家球拖拽事件
 * 5.功能函数游戏结束，游戏时间，界面渲染，生成小球实例，获取小球间的距离
 * 6.创建小球函数并初始化
 * 7.小球弹性运动
 * 8.小球与玩家球碰撞检测
 * 
 * 
 */
(function() {
	// 定义一个小球工厂
    class Ball {
        constructor(obj) {
        	// 创建一个实例小球div
            this.ball = document.createElement('div')
            // 给实例小球添加一个类名
            this.ball.className = 'son'
            // 初始位置
            this.ball.style.top = '0'
            this.iWidthCurrent = Math.floor(Math.random() * obj.iWidth)
            // 将实例小球放进游戏区域
            obj.outer.appendChild(this.ball)
            // 实例的速度等于随机速度0-10的速度
            this.ispeedX = Math.floor(Math.random() * obj.ispeedX)
            this.ispeedY = Math.floor(Math.random() * obj.ispeedY)
            // 游戏区域宽高
            this.iWidth = obj.iWidth;
            this.iHeight = obj.iHeight;
        }
    }
    const myBall = {
        time: document.getElementById('timer'),
        movDiv: document.getElementById('move'),
        timer: null,
        bNum:0,
        movePlus: {
        	// 游戏区域 
            outer: document.getElementById('div1'),
            // 游戏区域自身宽度
            iWidth: document.getElementById('div1').offsetWidth,
            // 游戏区域自身高度
            iHeight: document.getElementById('div1').offsetHeight,
            ispeedX: 10,
            ispeedY: 10
        },
        num: 0,
        init() {
            this.bindEvent(this.movePlus);
            this.creatBall(this.movePlus,30);
            this.gameTime();
        },
        // 玩家球拖拽事件
        bindEvent(ballObj) {
            //小球鼠标按下事件
            this.movDiv.addEventListener('mousedown', e => {
                let event = e || window.event;
                //记录小球按下时的坐标
                let mX = event.pageX;
                let mY = event.pageY;
                //监听鼠标移动事件
                document.onmousemove = e => {

                    let event = e || window.event,
                        // 获取小球的宽高
                        ballW = this.movDiv.offsetWidth,
                        ballH = this.movDiv.offsetHeight,
                        // 获取小球相对父级的左上位置
                        offX = this.movDiv.offsetLeft,
                        offY = this.movDiv.offsetTop,
                        // 获取当前鼠标移动的距离
                        disX = event.pageX - mX,
                        disY = event.pageY - mY,
                        // 获取小球移动的距离
                        nowX = parseInt(offX + disX),
                        nowY = parseInt(offY + disY);
                    // 赋值到当前小球的位置
                    this.movDiv.style.left = `${nowX}px`;
                    this.movDiv.style.top = `${nowY}px`;
                    // 重置鼠标当前位置
                    mX = event.pageX;
                    mY = event.pageY;
                    
                    //右边界
                    if (ballW + offX > ballObj.iWidth) {
                        // 调用游戏结束函数
                        this.gameOver()
                        //下边界
                    } else if (ballH + offY > ballObj.iHeight) {
                        this.gameOver()
                    } else if (offX < 0) {
                        this.gameOver()
                    } else if (offY < 0) {
                        this.gameOver()
                    }

                };
                // 鼠标松开事件
                document.addEventListener('mouseup', e => {
                    // 移除鼠标移动事件
                    document.onmousemove = null;
                })
            })
        },
        //游戏结束
        gameOver() {
            alert('游戏结束 ! 共坚持' + this.num + '秒');
            window.location.reload();
        },
        // 游戏时间
        gameTime() {
            this.timer = setInterval(() => {
                this.num++;
                this.rendom();
            }, 1000)
        },
        //界面渲染
        rendom() {
            this.time.innerHTML = `已经完成${this.num}秒`
        },
        //创建随机小球
        creatBall(ballObj,num) {
        	// 初始化第一个小球
        	for(let i = 0 ; i < 1; i ++){
        		this.newBall(ballObj);
        	}
        	// 2s增加一个小球最多15个
        	let newTimer = setInterval(()=>{
        		if(this.bNum < num){
        			this.newBall(ballObj)
        			this.bNum ++;
        		}
        	},2000)
        },
        moveBall(obj,dom){
        	obj.timer = setInterval(()=>{
        		this.cheackBallOver(obj,dom)
        		//让现在left的位置等于速度加上当前小球初始top的位置
        		let newLeft = obj.ispeedX + obj.ball.offsetTop,
        			newTop  = obj.ispeedY + obj.ball.offsetLeft;
        		// 下边界
        		if(newTop > obj.iHeight - obj.ball.offsetHeight){
        			obj.ispeedY *= -1
        		}
        		// 上边界
        		if (newTop < 0 ){
        			obj.ispeedY *= -1;
        		}
        		// 右边界
        		if(newLeft > obj.iWidth - obj.ball.offsetWidth ){
        			obj.ispeedX *= -1;
        		}
        		// 左边界
        		if(newLeft < 0){
        			obj.ispeedX *= -1;
        		}
        		obj.ball.style.top = `${newLeft}px`
        		obj.ball.style.left = `${newTop}px`
        	},50)
        },
        //创建小球实例
        newBall(ball){
        	const newBall = new Ball(ball);
        		//获得小球出现位置在上方任意游戏区域内的位置 
        		let current = newBall.iWidthCurrent - newBall.ball.offsetWidth;
        		if(current < 0){
        			current = 0;
        		}
        		newBall.ball.style.left = `${current}px`;
        		// 小球弹性运动
        		this.moveBall(newBall,this.movDiv);
        },
        // 碰撞检测
        cheackBallOver(obj,dom){
        	
        	const dis = this.getDistance(obj,dom);
        	if(dis < 55){
        		// dom.style.background = 'green';
                    this.gameOver();
        	}
        	
        },
        // 获取玩家球与小球之间的距离
        getDistance(obj,dom){
        	// 小球半径
        	const circleW = obj.ball.offsetWidth / 2;
        	const circleH = obj.ball.offsetHeight / 2;
        	// 玩家球半径
        	const ballCircleW = dom.offsetWidth / 2;
        	const ballCircleH = dom.offsetHeight / 2;
        	// 小球直角边长度
        	obj.x = obj.ball.offsetLeft + Math.floor(circleW);
        	obj.y = obj.ball.offsetTop + Math.floor(circleH);
        	// 玩家球直角边长度
        	let moveBallX = dom.offsetLeft + Math.floor(ballCircleW);
        	let moveBallY = dom.offsetTop + Math.floor(ballCircleH);
        	// 小球与玩家球圆心之间的距离
        	let disX = Math.abs(moveBallX - obj.x);
        	let disY = Math.abs(moveBallY - obj.y);
        	let dis = Math.floor(Math.sqrt(Math.pow(disX,2) + Math.pow(disY, 2)))
        	return dis;
        }
    }
    myBall.init()
}())
