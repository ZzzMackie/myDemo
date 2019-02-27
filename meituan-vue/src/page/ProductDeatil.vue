<template>
  <div class="page-product">
    <el-row class="m-crumbs">
            <products-crumbs />
    </el-row>
    <el-row class="m-detail">
      <el-col :span="16">a</el-col>
      <el-col :span="8">a</el-col>
    </el-row>
    <el-row>
      <span>网友评论</span>
    </el-row>
    <el-row>
      <el-col :span="19">a</el-col>
      <el-col :span="5">
        <products-map />
        <products-fav />
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import ProductsMap from '@/components/products/ProductsMap'
import ProductsFav from '@/components/products/ProductsFav'
import ProductsCrumbs from '@/components/products/ProductsCrumbs'
export default {
  data () {
    return {
    }
  },
  components: {
    ProductsMap,
    ProductsFav,
    ProductsCrumbs
  }

}
</script>
<style lang='scss' >
@import '~css/products/index.scss';
</style>
 