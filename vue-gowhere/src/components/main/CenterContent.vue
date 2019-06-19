<template>
  <div class="container-center">
    <el-row>
      <center-xlqw class="center-bg center-xlqw"></center-xlqw>
    </el-row>
    <el-row>
      <center-fairy class="center-bg center-fairy"></center-fairy>
    </el-row>
    <el-row>
      <center-godbeast class="center-bg center-godbeast"></center-godbeast>
    </el-row>
  </div>
</template>

<script>
import CenterXlqw from "@/components/maincenter/CenterXlqw";
import CenterFairy from "@/components/maincenter/CenterFairy";
import CenterGodbeast from "@/components/maincenter/CenterGodbeast";
export default {
  name: "CenterContent",
  data() {
    return {};
  },
  components: {
    CenterXlqw,
    CenterFairy,
    CenterGodbeast
  }
};
</script>

<style lang="scss">
.center-bg, .bottom-bg {
  position: relative;
  width: 100vw;
  padding-top: 0.3rem;
  overflow: hidden;

  box-sizing: border-box;
  &.center-xlqw {
    height: 10.49rem;
    background: url(~@/assets/xlqw.jpg) no-repeat 0 0rem/7.5rem 10.5rem;
  }
  &.center-fairy {
    height: 12.1rem;
    background: url(~@/assets/fairy.jpg) no-repeat 0 0rem/7.5rem 12.17rem;
  }
  &.center-godbeast {
    height: 15.8rem;
    background: url(~@/assets/godbeast.jpg) no-repeat 0 0rem/7.5rem 15.85rem;
  }
}
</style>
