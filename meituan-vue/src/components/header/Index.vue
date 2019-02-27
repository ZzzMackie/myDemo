<template>
  <div class="m-header">
      <el-row>
          <header-nav-bar/>
      </el-row>
      <el-row>
          <header-search-bar/>
      </el-row>
  </div>
</template>

<script>
import HeaderNavBar from 'header/HeaderNavBar'
import HeaderSearchBar from 'header/HeaderSearchBar'
export default {
  components: {
    HeaderNavBar,
    HeaderSearchBar
  }
}
</script>
<style lang="scss">
@import '~css/public/header/index.scss';
</style>
