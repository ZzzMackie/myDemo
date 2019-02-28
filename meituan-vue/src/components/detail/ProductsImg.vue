<template>
  <el-row class="container">
    <el-col class="container-left" :span="16">
      <ul class="left-item">
        <li class="item-list">
          <div class="list-title">
            <h4>{{detailList.title}}</h4>
            <div class="list-score">
              <i :class="{'el-icon-star-on':detailList.score >= 1, 'el-icon-star-off':detailList.score < 1, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':detailList.score >= 2, 'el-icon-star-off':detailList.score < 2, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':detailList.score >= 3, 'el-icon-star-off':detailList.score < 3, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':detailList.score >= 4, 'el-icon-star-off':detailList.score < 4, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':detailList.score >= 5, 'el-icon-star-off':detailList.score < 5, 'icon':true}" ></i>
              <span>{{detailList.score}}分人均￥{{detailList.avgPrice}}</span>
            </div>
          </div>
          <div class="list-icon">
            <i class="el-icon-success n-icon"></i>
            <span>食品安全档案</span>
          </div>
        </li>
        <li class="item-address">
          <p>地址：{{detailList.address}}</p>
          <p>电话：{{detailList.phone}}</p>
          <p>营业时间：{{detailList.businessTime}}</p>
        </li>
        <li class="item-wifi">
          <div class="wifi">
            <img src="@/assets/img/wifi.png" alt="">
            <p>提高wifi</p>
            
          </div>
          <div>
            <img src="@/assets/img/p.png" alt="">
            <p>停车位</p>
            
          </div>
        </li>
      </ul>
    </el-col>
    <el-col class="container-right" :span="8">
      <div class="img-pjc">
        <img :src="detailList.imgUrl" alt="">
      </div>
      <ul class="pjc">
        <li><img src="~@/assets/img/1.jpg" alt=""></li>
        <li><img src="~@/assets/img/2.jpg" alt=""></li>
        <li><img src="~@/assets/img/3.jpg" alt=""></li>
        <li><img src="~@/assets/img/4.jpg" alt=""></li>
      </ul>
    </el-col>
  </el-row>
  
</template>

<script>
export default {
  props: ["detailList"],
  data() {
    return {};
  },
  created() {
    console.log(this.detailList);
  }
};
</script>
<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.container {
  color: #666;
  .container-left {
    padding: 0 10px;
  }
  .left-item {
    li:not(:last-of-type) {
      border-bottom: 1px solid #ddd;
    }
    .item-address{
      padding: 16px 0 11px;
      p{
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }
    .item-wifi{
      padding-top: 20px;
      div{
        display:inline-block;
        text-align: center;
        img{
          width: 24px;
          margin: auto auto 11px;
          height: 24px;
        }
      }
      .wifi{
        
        margin-right: 30px;
        line-height: 17px;
        
      }
    }
    .item-list {
      display: flex;
      justify-content: space-between;
      .list-icon {
        color: rgb(24, 206, 186);
      }
      .list-title {
        h4 {
          font-size: 26px;
          color: #666;
          line-height: 37px;
          margin-bottom: 10px;
        }
        .list-score {
          margin: 6px 0 17px;
          font-size:14px;
          height: 14px;
          span{
            margin-left: 6px;
            color: #666;
          }
        }
      }
    }
  }

  .el-col {
    height: 274px;
    img {
      border-radius: 5px;
    }
    ul.pjc {
      margin-top: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    div.img-pjc {
      width: 100%;
      height: 214px;
      img {
        width: 100%;
      }
    }
  }
  .icon {
    color: rgb(255, 153, 0);
  }
  .n-icon {
    color: rgb(24, 206, 186);
  }
}
</style>
 