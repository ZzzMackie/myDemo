<template>
<div>
    <el-container>
        <el-header class="header-container">
            <!-- Header content -->
            <header-nav :foo="foo" ref="hnav"></header-nav>
        </el-header>
        <nav-menu ></nav-menu>
        <el-main height="">
            <!-- Main content -->
            <router-view></router-view>
        </el-main>
        <el-footer height="">
            <!-- Footer content -->
            <footer-down></footer-down>
        </el-footer>
    </el-container>

</div>
</template>

<script>
import NavMenu from '@/components/header/NavMenu'
import FooterDown from '@/components/footer/FooterDown'
import HeaderNav from '@/components/header/HeaderNav'
export default {
    name: 'Home',
    data() {
        return {
            foo: true
        }
    },
    components: {
      FooterDown,
      HeaderNav,
      NavMenu
    },
    mounted () {
        console.log(this.$refs.hnav.isopen)
    }
}
</script>

<style lang='scss' scoped>
.header-container{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 1.2rem!important;
    display: flex;
    background-color: #202020;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    box-sizing: border-box;
    color: #fff;
    z-index: 11;
}
.el-footer{
    padding: 0;
}
</style>
