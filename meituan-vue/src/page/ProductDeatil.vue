<template>
  <div class="page-product">
    <el-row class="m-crumbs">
            <products-crumbs />
    </el-row>
    <el-row class="m-detail bor">
      <products-img  :detailList="detailList" />
    </el-row>
    <el-row class="m-title">
      <h3>推荐菜</h3>
    </el-row>
    
    <el-row class="m-list">
      <el-col :span="19">
        <products-Recommend class="bor"  :recommend="detailList.recommend"/>
        <el-row class="list-title">
          <p>网友点评</p>
        </el-row>
        <products-talk class="bor" :commend="detailList.comment" />
      </el-col>
      <el-col :span="5">
        <products-fav class="bor"  />
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import ProductsMap from "@/components/products/ProductsMap";
import ProductsFav from "@/components/products/ProductsFav";
import ProductsCrumbs from "@/components/products/ProductsCrumbs";
import ProductsImg from "@/components/detail/ProductsImg";
import ProductsRecommend from "@/components/detail/ProductsRecommend";
import ProductsTalk from "@/components/detail/ProductsTalk";
import GetAPi from "ajax";
export default {
  data() {
    return {
      detailList: null,
      recommend: ''
    };
  },
  created() {
    GetAPi.getDetail().then(res => {
      if (res.data.status === "success") {
        this.detailList = res.data.data;
        console.log(this.detailList);
      }
    });
  },
  components: {
    ProductsMap,
    ProductsFav,
    ProductsCrumbs,
    ProductsImg,
    ProductsTalk,
    ProductsRecommend
  }
};
</script>
<style lang='scss' >
@import "~css/products/index.scss";
.m-detail {
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
}
.m-list{
  padding: 15px 10px 15px 0;
  border-radius: 5px;
  .list-title{
    padding-top: 40px;
    p{
      font-size: 20px;
      line-height: 26px;
      color: #666;
      margin-bottom: 8px;
    }
  }
}
.m-title{
  padding-top: 40px;
  color:#222;
  h3{
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
  }
}
.bor{
    border:1px solid #ddd;
    border-radius: 5px;
}
</style>
 