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
      this.ball = document.createElement('div');
      // 给实例小球添加一个类名
      this.ball.className = 'son';
      // 初始位置
      this.ball.style.top = '0';
      this.iWidthCurrent = Math.floor(Math.random() * obj.iWidth);
      // 将实例小球放进游戏区域
      obj.outer.appendChild(this.ball);
      // 实例的速度等于随机速度0-10的速度
      this.ispeedX = Math.floor(Math.random() * obj.ispeedX);
      this.ispeedY = Math.floor(Math.random() * obj.ispeedY);
      // 游戏区域宽高
      this.iWidth = obj.iWidth;
      this.iHeight = obj.iHeight;
      this.id = 0;
    }
  }
  const myBall = {
    time: document.getElementById('timer'),
    movDiv: document.getElementById('move'),
    timer: null,
    bNum: 0,
    ballList: [],
    flag: true,
    maxGameTime: '',
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
    //2019-08-12
    //cookie 存储 by mackie
    CookieStore: {
      get: function(name) {
        var cookieName = encodeURIComponent(name) + '=',
          cookieStart = document.cookie.indexOf(cookieName),
          cookieValue = null;

        if (cookieStart > -1) {
          var cookieEnd = document.cookie.indexOf(';', cookieStart);
          if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
          }
          cookieValue = decodeURIComponent(
            document.cookie.substring(
              cookieStart + cookieName.length,
              cookieEnd
            )
          );
        }

        return cookieValue;
      },
      set: function(name, value, expires, path, domain, secure) {
        var cookieText =
          encodeURIComponent(name) + '=' + encodeURIComponent(value);

        if (expires instanceof Date) {
          cookieText += '; expires=' + expires.toGMTString();
        }

        if (path) {
          cookieText += '; path=' + path;
        }

        if (domain) {
          cookieText += '; domain=' + domain;
        }

        if (secure) {
          cookieText += '; secure';
        }

        document.cookie = cookieText;
      },
      unset: function(name, path, domain, secure) {
        this.set(name, '', new Date(0), path, domain, secure);
      }
    },

    // 2019-08-12
    // 本地存储 by mackie
    LocalStore: {
      set: function(n, val) {
        if (window.localStorage && localStorage.setItem) {
          try {
            // safari 隐私浏览器会报错
            localStorage.setItem(n, val);
          } catch (e) {
            Utils.cookieStore.set(n, val);
          }
        } else {
          Utils.cookieStore.set(n, val);
        }
        return this;
      },
      get: function(n) {
        if (window.localStorage && localStorage.getItem) {
          try {
            return localStorage.getItem(n);
          } catch (e) {
            return Utils.cookieStore.get(n);
          }
        } else {
          return Utils.cookieStore.get(n);
        }
      },
      remove: function(n) {
        if (window.localStorage && localStorage.removeItem) {
          try {
            localStorage.removeItem(n);
          } catch (e) {
            Utils.cookieStore.unset(n);
          }
        } else {
          Utils.cookieStore.unset(n);
        }
        return this;
      }
    },
    init() {
      this.maxGameTime = this.LocalStore.get('maxGameTime') || 0;
      this.bindEvent(this.movePlus);
      this.creatBall(this.movePlus, 30);
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
            this.gameOver();
            this.stopBallMove();
            document.onmousemove = null;
            //下边界
          } else if (ballH + offY > ballObj.iHeight) {
            this.gameOver();
            this.stopBallMove();
            document.onmousemove = null;
          } else if (offX < 0) {
            this.gameOver();
            this.stopBallMove();
            document.onmousemove = null;
          } else if (offY < 0) {
            this.gameOver();
            this.stopBallMove();
            document.onmousemove = null;
          }
        };
        // 鼠标松开事件
        document.addEventListener('mouseup', e => {
          // 移除鼠标移动事件
          document.onmousemove = null;
        });
      });
    },
    stopBallMove () {
        if(this.ballList.length > 0) {
            this.ballList.forEach(item => {
                clearInterval(item.timer)
            })
        }
    },
    //游戏结束
    gameOver() {
      this.grade();
      clearInterval(this.newTimer);
      clearInterval(this.timer);
      this.restartEvent();
    },
    // 成绩
    grade() {
      var _html = document.getElementById('diaLog'),
        _text = document.getElementsByClassName('dialog_text')[0],
        _manText = document.getElementsByClassName('dialog_man')[0],
        _maxText = document.getElementsByClassName('dialog_max')[0];
      _html.className = 'active';
      _text.innerText = `游戏结束 ! 共坚持  ${this.num} 秒`;
      if (this.num > this.maxGameTime) {
        this.LocalStore.set('maxGameTime', this.num);
      }
      _manText.innerText = this.num >= 30 ? `是个真男人(真汉子)` : this.num < 30 && this.maxGameTime >= 30 ? `曾经是条真男人(真汉子)` : `注孤生！！！`;
      _maxText.innerText = `历史最高  ${
        this.num > this.maxGameTime ? this.num : this.maxGameTime
      } 秒`;
    },
    // 重新开始事件
    restartEvent() {
      const $restartBtn = document.getElementsByClassName('restart')[0];
      $restartBtn.addEventListener('click', function() {
        window.location.reload();
      });
    },
    // 游戏时间
    gameTime() {
      if (this.timer) return;
      this.timer = setInterval(() => {
        this.num++;
        this.rendom();
      }, 1000);
    },
    //界面渲染
    rendom() {
      this.time.innerHTML = `已经完成${this.num}秒`;
    },
    //创建随机小球
    creatBall(ballObj, num) {
      // 初始化第一个小球
      for (let i = 0; i < 1; i++) {
        this.newBall(ballObj);
      }
      // 2s增加一个小球最多15个
      this.newTimer = setInterval(() => {
        if (this.bNum < num) {
          this.newBall(ballObj);
          this.bNum++;
        }
      }, 2000);
    },
    // 移动小球
    moveBall(obj, dom) {
      obj.timer = setInterval(() => {
        if (!this.cheackBallOver(obj, dom)) return;
        //让现在left的位置等于速度加上当前小球初始top的位置
        let newLeft = obj.ispeedX + obj.ball.offsetTop,
          newTop = obj.ispeedY + obj.ball.offsetLeft;
        // 下边界
        if (newTop > obj.iHeight - obj.ball.offsetHeight) {
          obj.ispeedY *= -1;
        }
        // 上边界
        if (newTop < 0) {
          obj.ispeedY *= -1;
        }
        // 右边界
        if (newLeft > obj.iWidth - obj.ball.offsetWidth) {
          obj.ispeedX *= -1;
        }
        // 左边界
        if (newLeft < 0) {
          obj.ispeedX *= -1;
        }
        obj.ball.style.top = `${newLeft}px`;
        obj.ball.style.left = `${newTop}px`;
      }, 50);
    },
    //创建小球实例
    newBall(ball) {
      const newBall = new Ball(ball);
      //获得小球出现位置在上方任意游戏区域内的位置
      let current = newBall.iWidthCurrent - newBall.ball.offsetWidth;
      if (current < 0) {
        current = 0;
      }
      this.ballList.push(newBall)//所有小球的数组
      newBall.id = this.ballList.length;//给每个小球一个唯一id
      newBall.ball.style.left = `${current}px`;
      // 小球弹性运动
      this.moveBall(newBall, this.movDiv);

    },
    // 清除小球事件
    clearBall (el) {
        if(this.ballList.length > 0) {
            this.ballList.forEach( (item,index,arr) => {
                if(el.id !== item.id) {
                    item.ball.remove()
                    arr.splice(index,1);
                }
            })
        }
    },
    // 碰撞检测
    cheackBallOver(obj, dom) {
      const dis = this.getDistance(obj, dom);
      if (dis < 55) {
        // dom.style.background = 'green';
        this.clearBall(obj)
        this.gameOver();//结束游戏
        return !this.flag;
      }
      return this.flag;
    },
    // 获取玩家球与小球之间的距离
    getDistance(obj, dom) {
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
      let dis = Math.floor(Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2)));
      return dis;
    }
  };
  timer.addEventListener('click', function() {
    myBall.init();
  });
})();

(function () {
    const closePanel = function () {
        $(".close").on('click', function () {
            $(".menuPanel").addClass('bounceOutUp')
            setTimeout(function () {
                $(".menuPanel").removeClass().addClass('menuPanel')
            },1100)
        })
    }
    setTimeout(function () {
        $(".menuPanel").removeClass().addClass('menuPanel')
    },300)
    closePanel()
})()
$(".menuPanel").draggable();
