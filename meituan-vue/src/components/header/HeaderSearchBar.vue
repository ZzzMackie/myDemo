<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" title="美团App" alt="美团APP"/>
      </el-col>
      <el-col :span="15" class="center">
        <el-row class="wrapper">
          <el-input class="el-input" 
                    v-model="value" 
                    placeholder="请输入关键字"
                    @blur="onblur"
                    @focus="onfocus"
                    @input="onUp">
          </el-input>
          <el-button class="el-button" type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-show="isHot">
            <dt>热门搜索</dt>
            <dd v-for="item in hotPlaceList"
                :key="item">
              <router-link :to="{name: 'goodsList', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-show="isSearch">
            <dd v-for="(item,index) in searchList"
                :key="index">
              <router-link :to="{name: 'goodsList', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </el-row>
        <p class="suggest">
          <router-link v-for="item in suggestList"
                       :key="item" 
                       :to="{name: 'goodsList', params: {name: item}}">
                       {{item}}
          </router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GetApi from 'ajax'
export default {
  data () {
    return {
      value: '',
      isFocus: false,
      suggestList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店', '7天连锁酒店'],
      searchList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店', '7天连锁酒店'],
      hotPlaceList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店', '7天连锁酒店']
    }
  },
  watch: {
        "$route.params.name": function () {
            this.value = this.$route.params.name;
        }
    },
  created () {
    GetApi.getSeachHotList().then( res => {
      if(res.data.status == 'succes'){
        this.hotPlaceList = res.data.data;
        this.suggestList = res.data.data;
      }
    })
  },
  computed: {
    isHot () {
      return this.isFocus && !this.value
    },
    isSearch () {
      return this.isFocus && this.value
    }
  },
  methods: {
    onfocus () {
      this.isFocus = true
    },
    onblur () {
      setTimeout(() => {
        this.isFocus = false
      }, 500)
    },
    onUp () {
      GetApi.getSearchList().then((res) => {
        console.log(res)
                if (res.data.status === 'success') {
                    this.searchList = res.data.data.list.filter((item) => item.indexOf(this.value) > -1);
                }
            });
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~css/index/index.scss';
</style>
