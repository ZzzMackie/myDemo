<template>
    <div class="container">
        <div class="header-logo" style="display: flex; align-items: center;">
            <h1 style="width: 1rem; height: 1rem;">
                <a href="https://3s.qq.com/m/main.shtml" ontouchend="PTTSendClick('link', 'logo', 'logo');" style="width: 100%; height: 100%; display: block;">
                    <img src="https://game.gtimg.cn/images/3s/m/m201811/logo.png" alt="三生三世十里桃花手游" style="width: 100%; height: 100%;">
                </a>
            </h1>
            <div class="header-desc" style="margin-left: 0.2rem; line-height: 1;">
                <h2 style="font-size: 0.34rem; font-weight: 500; line-height: 1;">
                    三生三世十里桃花
                </h2>
                <p style="font-size: 0.24rem; color: rgb(139, 139, 139);">
                    我爱你哦
                </p>
            </div>
        </div>
        <div class="header-btns" style="display: flex; align-items: center;">
            <a href="https://3s.qq.com/" class="header-appoint" ontouchend="PTTSendClick('btn', 'appoint', '立即预约');" style="width: 2.03rem; padding-top: 0.6rem; height: 0px; overflow: hidden; text-align: center; background: url(&quot;//game.gtimg.cn/images/3s/cp/a20190418xzm/link-web.png&quot;) 0px 0px / 100% 100% no-repeat;">
                立即预约
            </a>
            <ul :class="{'header-menu': true, 'open': isopen}" @click="onOpen" style="width: 0.53rem; height: 0.4rem; padding: 0.2rem 0.1rem; margin-left: 0.1rem; flex-direction: column;">
                <li style="width: 100%; height: 0.04rem; background-color: rgb(255, 255, 255); text-indent: -9999rem; box-sizing: border-box; transition: all 0.5s ease 0s;">
                    ——
                </li>
                <li style="width: 100%; height: 0.04rem; background-color: rgb(255, 255, 255); text-indent: -9999rem; box-sizing: border-box; transition: all 0.5s ease 0s; margin-top: 0.15rem;">
                     ——
                </li>
                <li style="width: 100%; height: 0.04rem; background-color: rgb(255, 255, 255); text-indent: -9999rem; box-sizing: border-box; transition: all 0.5s ease 0s; margin-top: 0.15rem;">
                     ——
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    data () {
        return{
            isopen: false
        }
    },
    created () {
        console.log(this.$bus)
    },
    methods: {
        onOpen () {
            this.isopen = !this.isopen;

            this.$EventBus.$emit('changeOpen', this.isopen);

        }
    }
}
</script>

<style lang="scss">
.container{
    width: 100vw;
    display: flex;
}
.header-btns{
    ul{
        li:nth-child(1){
            transform-origin: left center;
            transform: rotateZ(0deg);
        }
        li:nth-child(2){
            opacity: 1;
        }
        li:nth-child(3){
            transform-origin: left center;
            transform: rotateZ(-0deg);
        }
    }
    ul.open{
        li:nth-child(1){
            transform-origin: left center;
            transform: rotateZ(45deg);
        }
        li:nth-child(2){
            opacity: 0;
        }
        li:nth-child(3){
            transform-origin: left center;
            transform: rotateZ(-45deg);
        }
    }
}
</style>
