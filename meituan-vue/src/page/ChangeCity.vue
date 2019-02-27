<template>
  <div class="page-changeCity">
      <el-row>
          <province/>
      </el-row>
      <el-row>
          <hot-city title="热门城市:" :list="hotList" />
      </el-row>
      <el-row>
          <hot-city title="最近访问:" :list="rencentList" />
      </el-row>
      <el-row>
          <cate-gory />
      </el-row>
      
  </div>
</template>

<script>
import Province from '@/components/changeCity/Province'
import HotCity from '@/components/changeCity/HotCity'
import CateGory from '@/components/changeCity/CateGory'
import GetApi from 'ajax'
export default {
  data () {
    return {
        hotList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
        rencentList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
    }
  },
  components: {
      Province,
      HotCity,
      CateGory
  },
  created () {
      GetApi.getHotCity().then( res => {
          if (res.data.status === 'success') {
                 this.hotList = res.data.data.map((item) => item.name);
            }
      }),
      GetApi.getRecentCity().then(res => {
              if (res.data.status === 'success') {
                 this.rencentList = res.data.data.map((item) => item.name);
            }
        })
  }

}
</script>
<style lang='scss' >
@import '~css/changecity/iselect.scss';
</style>
 