<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <products-item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import ProductsItem from './ProductsItem'
import GetApi from 'ajax'
export default {
  name: 'ProducteList',
  data () {
    return {
        nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    }
  },
  components: {
      ProductsItem
  },
  created () {
      GetApi.getProducts().then((res) => {
          console.log(res.data.data)
      if (res.data.status == 'success') {
        this.productList = res.data.data
      }
    })
  }

}
</script>
<style lang='scss' scoped>
</style>
 