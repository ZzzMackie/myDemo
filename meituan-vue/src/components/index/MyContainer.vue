<template>
  <div class="m-istyle">
    <div @mouseover="onOver" :class="status.class">
      <dl @mouseover="onOver" :class="status.class">
        <dt>{{status.title}}</dt>
        <dd
          v-for="(item, index) in status.list"
          :key="index"
          :class="{active: kind == item.tab}"
          :data-type="item.tab"
        >{{item.text}}</dd>
      </dl>
      <ul class="ibody">
        <li v-for="(item,index) in list[kind]" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
            <div class="cbody">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
              <div class="price-info">
                  <span class="current-price-wrapper">
                      <span class="price-symbol numfont">¥</span>
                      <span class="current-price numfont">{{item.price}}</span>
                      <span class="units">/人均</span>
                  </span>
              </div>
            </div>
            
            <!-- card body -->
          </el-card>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GetApi from 'ajax'
export default {
  props: ['status'],
  data () {
    return {
      kind: "all",
      list: {}
    }
  },
  created () {
    GetApi.resultsByKeywords().then(res => {
      this.list = res.data.data;
      console.log(this.list)
    })
  },
  methods: {
    onOver (e) {
      const dom = e.target;
      const tagName = dom.tagName.toLowerCase();
      if(tagName != 'dd'){
        return false;
      }
      this.kind = dom.getAttribute('data-type')

    }
  }

}
</script>
<style lang='scss' scoped>
@import '~css/index/artistic.scss';
</style>
 