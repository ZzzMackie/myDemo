<template>
  <div class="container-top">
    <i class="kv-music tid fr"></i>
    <a
      href="javascript:playerVideo('v0868q3fork');"
      class="kv-play db"
      ontouchend="PTTSendClick('btn', 'play', '播放')"
    >
      <span></span>
      <i></i>
    </a>
    <a
      href="https://3s.qq.com/zlkdatasys/mct/d/play.shtml"
      class="db tid sprite kv-download mct_download_btn"
    >立即下载</a>
    <a href="//bbs.3s.qq.com" class="kv-forum tid db">进入论坛</a>
    <audio
      id="music"
      src="//ossweb-img.qq.com/images/3s/cp/a20181106yy/music.mp3"
      autoplay="autoplay"
    ></audio>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.container-top {
    position: relative;
  width: 100vw;
  height: 12.24rem;
  background: url(~@/assets/kv.jpg) no-repeat 0 0/ 100% 100%;
}
.kv-forum {
  width: 0.54rem;
  height: 1.88rem;
  background: url(//game.gtimg.cn/images/3s/m/m201904/icon.png) no-repeat -6.4rem -4.4rem/9rem
    10rem;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
}
.kv-music.fr {
  position: absolute;
  top: 0.6rem;
  left: 1.4rem;
  z-index: 10;
  display: block;
  width: 0.33rem;
  height: 0.33rem;
  background: url(//game.gtimg.cn/images/3s/m/m201904/spr.png) no-repeat -8.28rem -2.19rem/9rem
    8rem;
  animation: playRotate 5s linear infinite;
}
.kv-play {
  width: 0.79rem;
  height: 0.76rem;
  position: absolute;
  bottom: 2.05rem;
  left: 1.4rem;
  span {
    display: block;
    width: 100%;
    height: 100%;
    background: url(//game.gtimg.cn/images/3s/m/m201904/icon.png) no-repeat -0.48rem -8.79rem/9rem
      10rem;
    position: absolute;
    top: 0;
    left: 0;
    animation: playRotate 15s linear infinite;
  }
  i {
    display: block;
    width: 0.21rem;
    height: 0.26rem;
    background: url(//game.gtimg.cn/images/3s/m/m201904/icon.png) no-repeat -0.19rem -9rem/9rem
      10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.13rem 0 0 -0.08rem;
  }
}
.kv-download {
    width: 3.22rem;
    height: 1.21rem;
    left: 50%;
    background-position: -4.48rem -2.34rem;
    position: absolute;
    transform: translateX(-1.61rem);
    bottom: 0;
}
@keyframes playRotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
