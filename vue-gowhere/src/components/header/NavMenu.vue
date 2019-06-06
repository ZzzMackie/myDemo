<template>
    <div class="container-menu" :class="{open:isactive}">
        <router-link class="container-link" v-for="item in menuName" :key="item.path" :to="{ name: item.path}">{{item.title}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavMenu',
    data () {
        return{
            isactive: false,
            menuName: [{
                path: 'home',
                title: '官网首页'
            }, {
                path: 'news',
                title: '仙履奇闻'
            },{
                path: 'fairy',
                title: '仙魔铁闻'
            }, {
                path: 'cheats',
                title: '修仙秘籍'
            }, {
                path: 'taikoo',
                title: '太古遗音'
            },  {
                path: 'cdk',
                title: 'cdk兑换'
            }]
        }
    },
    created () {
        this.$EventBus.$on('changeOpen', data => {
                this.isactive = data;
        })
    }
}
</script>

<style lang="scss">
.container-menu{
    position: fixed;
    top: 1.2rem;
    width: 0;
    height: 91vh;
    background: #000;
    opacity: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    transition: all .5s;
    transform: translateX(100vw);
    justify-content: space-around;
}
.container-menu.open{
    transform: translateX(0);
    width: 100vw;
    opacity: .7;
    z-index: 999;
}
.container-link{
    color: #fff;
    font-size: .3rem;}
.container-link:not(:last-of-type){
    

    border-bottom: 1px solid #666;
}
</style>
