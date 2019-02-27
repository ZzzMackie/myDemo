<template>
  <div class="m-geo">
      <div class="position m-user">
          <i class="el-icon-location"/>
          {{$store.state.position.name}}
          <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
          [<router-link class="register" :to="{name:'indexPage'}">大厂回族自治县</router-link><router-link class="register" :to="{name:'indexPage'}"> 廊坊 </router-link><router-link class="register" :to="{name:'indexPage'}">固安县</router-link>]       
      </div>
      <div class="m-user" v-if="!$store.state.user">
          <router-link class="login" :to="{name:'login'}">立即登录</router-link>
          <router-link class="register" :to="{name:'register'}">注册</router-link>
      </div>
      <div class="m-user" v-else>
             <router-link class="login" :to="{name: 'user'}">{{$store.state.user}}</router-link>
            <router-link class="register" :to="{name: 'exit'}">退出</router-link>

        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }

}
</script>
<style lang='scss' >

</style>
