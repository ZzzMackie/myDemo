<template>
  <div class="page-product">
        <el-row class="m-crumbs">
            <products-crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <products-categroy />
                </el-row>
                <el-row>
                    <products-list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <products-map />
                <products-fav />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ProductsCrumbs from '@/components/products/ProductsCrumbs'
import ProductsCategroy from '@/components/products/ProductsCategroy'
import ProductsList from '@/components/products/ProductsList'
import ProductsMap from '@/components/products/ProductsMap'
import ProductsFav from '@/components/products/ProductsFav'
export default {
  name: 'GoodsList',
  data () {
    return {
    }
  },
  components: {
    ProductsCrumbs,
    ProductsCategroy,
    ProductsList,
    ProductsFav,
    ProductsMap
  }

}
</script>
<style lang='scss' >
@import '~css/products/index.scss';
</style>
 