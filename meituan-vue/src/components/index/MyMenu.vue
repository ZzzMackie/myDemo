<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="onLeave">
          <dt>全部分类</dt>
          <dd v-for="item in menuList"
              :key="item.name"
              @mouseenter="onEnter(item)">
              <i :class="item.type"></i>
              {{item.name}}
              <span class="arrow"></span>
         </dd>
      </dl>
      <div class="detail" v-if="curDetail"
           @mouseenter="curEnter"
           @mouseleave="curLeave">
          <template  v-for="(item,index) in curDetail.items"
                     >
              <h4 :key="index">
                  {{item.title}}
              </h4>
              <span v-for="(v,i) in item.items" :key="v + '' + i">
                  {{v}}
              </span>
          </template>
      </div>
  </div>
</template>

<script>
import requestApi from '@/AJAX/axiosRequest'
export default {
  name: 'MyMenu',
  data () {
    return {
        menuList: [],
        curDetail: null
    }
  },
  created () {
      requestApi.getMenuList().then(res => {
          if(res.data.status === 'success'){
              this.menuList = res.data.data
          }
      })
  },
  methods: {
      onEnter (item) {
          this.curDetail = item;
        //   this.$set('cueDetail',item)
      },
      onLeave () {
          console.log(this.curDetail)
          this.timer = setTimeout(() => {
              this.curDetail = null;
          }, 500);
      },
      curEnter () {
          clearTimeout(this.timer)
      },
      curLeave () {
          this.curDetail = null;
      }
  }

}
</script>
<style lang='scss' scoped>
// @import '~css/index/index.scss';
</style>
 