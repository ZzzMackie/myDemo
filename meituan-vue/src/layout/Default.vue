<template>
  <div class="layout-default">
    <el-container >
        <el-header height="">
            <my-header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="">
          <my-footer />
        </el-footer>
    </el-container>
  </div>

</template>
<script>
import myHeader from 'header/Index'
import myFooter from 'footer/FooterDefault'
export default {
  name: 'default',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="scss" scoped>
    @import '~css/public/layout.scss';
</style>
