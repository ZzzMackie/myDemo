<template>
<div>
    <footer class="foot">
        <p class="copyright_en">COPYRIGHT © 1998 - 2019 TENCENT.ALL RIGHTS RESERVED.</p>
        <p class="copyright_zh">腾讯公司 版权所有</p>
        <p class="copyright_public">
            <a target="_blank"
               href="//www.qq.com/culture.shtml" 
               style="display:inline">
               粤网文[2017]6138-1456号
            </a>
            <span style="margin:0 2px;display:inline;">
                |
            </span>
            <a style="display:inline" 
               target="_blank" 
               href="//game.qq.com/culture2.htm">
               （总）网出证（粤）字第057号
            </a>
        </p>
    </footer>
</div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.foot {
  text-align: center;
  font-size: .20rem;
  line-height: 1.6;
  width: 100vw;
  color: #233055;
  background-color: #000;
  padding: .12rem;
}
.foot a{
    color: #233055;
}
</style>
