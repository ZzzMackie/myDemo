<template>
  <el-row class="m-header-topbar m-header">
    <el-col :span="10">
      <header-nav-geo-bar />
    </el-col>
    <el-col :span="14">
      <header-nav-meanu-bar />
    </el-col>
  </el-row>
</template>

<script>
import HeaderNavGeoBar from 'header/HeaderNavGeoBar'
import HeaderNavMeanuBar from 'header/HeaderNavMeanuBar'

export default {
  components: {
    HeaderNavGeoBar,
    HeaderNavMeanuBar
  }
}
</script>
<style lang='scss' >
  // @import '~css/public/header/topbar.scss';
</style>
