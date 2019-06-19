<template>
  <div class="container-bottom">
    <el-row>
      <bottom-Cheats class="bottom-bg bottom-cheats"></bottom-Cheats>
    </el-row>
    <el-row>
      <bottom-Taikoo class="bottom-bg bottom-taikoo"></bottom-Taikoo>
    </el-row>
    <el-row>
      <bottom-Game class="bottom-bg bottom-game"></bottom-Game>
    </el-row>
  </div>
</template>

<script>
import BottomCheats from "@/components/mainBottom/BottomCheats";
import BottomTaikoo from "@/components/mainBottom/BottomTaikoo";
import BottomGame from "@/components/mainBottom/BottomGame";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    BottomCheats,
    BottomTaikoo,
    BottomGame
  }
};
</script>

<style lang="scss">
.bottom-cheats{
        height: 15.1rem;
    background: url(~@/assets/cheats.jpg) no-repeat 0 0rem/7.5rem 15.15rem;
}
.bottom-taikoo{
    height: 10.56rem;
    background: url(~@/assets/taikoo.jpg) no-repeat 0 0rem/7.5rem 10.56rem;
}
.bottom-game{
        height: 10.38rem;
    background: url(~@/assets/game.jpg) no-repeat 0 0/100% 100%;
}
</style>
