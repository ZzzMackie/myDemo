<template>
    <div class="container-menu" :class="{open:isactive}">

    </div>
</template>

<script>
export default {
    name: 'NavMenu',
    data () {
        return{
            isactive: false
        }
    },
    created () {
        this.$EventBus.$on('changeOpen', data => {
                this.isactive = data;
                console.log(data)
        })
    }
}
</script>

<style lang="scss">
.container-menu{
    position: fixed;
    top: 1.2rem;
    width: 0;
    height: 100vh;
    background: #000;
    opacity: 0;
    color: #fff;
    transition: all .5s;
    transform: translateX(100vw);
}
.container-menu.open{
    transform: translateX(0);
    width: 100vw;
    opacity: .7;
    z-index: 999;
}
</style>
