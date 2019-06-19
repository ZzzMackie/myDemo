<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  font-size: calc(100vw / 750 * 100);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* margin-top: .6rem; */
}
.sprite {
    background: url(//game.gtimg.cn/images/3s/m/m201904/sprite.png) no-repeat 0 0/12.08rem 7.51rem;
}
.db{
  text-indent: -9999rem;
}
</style>
