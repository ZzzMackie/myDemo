<template>
  <div class="wrapper">
      <h2>猜你喜欢</h2>
      <dl v-for="item in recommend" :key="item.itemId">
          <img :src="item.imgUrl" alt="">
          <dt>{{item.title}}</dt>
          <dd>
              <i :class="{'el-icon-star-on':item.score >= 1, 'el-icon-star-off':item.score < 1, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':item.score >= 2, 'el-icon-star-off':item.score < 2, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':item.score >= 3, 'el-icon-star-off':item.score < 3, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':item.score >= 4, 'el-icon-star-off':item.score < 4, 'icon':true}" ></i>
              <i :class="{'el-icon-star-on':item.score >= 5, 'el-icon-star-off':item.score < 5, 'icon':true}" ></i>
              <span class="pingjia">{{item.commentNum}}条评价</span>
          </dd>
          <dd class="nth">{{item.areaName}}</dd>
          <dd class="nth-f">
              <span>￥</span>
              <span>{{item.lowPrice}}</span>
              <span>起</span>
          </dd>
      </dl>
  </div>
</template>

<script>
import GetApi from "ajax";
export default {
  data() {
    return {
      recommend: []
    };
  },
  created() {
    GetApi.getRecommend().then(res => {

      if (res.status == 200) {
        this.recommend = res.data.data;
        console.log(res.data.data);
      }
    });
  }
};
</script>
<style lang='scss' scoped>
.wrapper {
  padding: 10px;
  width: 230px;
  margin: 0 10px 10px 10px;
  background-color: #fff;
  h2 {
    font-size: 16px;
    color: #333;
    line-height: 22px;
    font-weight: 500;
  }
  dl {
    margin-top: 10px;
    img {
      width: 100%;
    }
    dt {
      margin-top: 10px;
      font-size: 14px;
      color: #222;
      line-height: 20px;
    }
    dd {
      padding-top: 10px;
      span.pingjia {
        font-size: 12px;
        color: #999;
        height: 24px;
        line-height: 24px;
        margin-left: 10px;
      }
      &.nth {
        font-size: 12px;
        color: #999;
        width: 100%;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 4px;
      }
      &.nth-f {
        color: #f60;
        span:nth-child(1) {
          font-size: 14px;
          font-weight: 700;
        }
        span:nth-child(2) {
          font-size: 22px;
          letter-spacing: -0.5;
        }
        span:nth-child(3) {
          font-size: 12px;
          margin-left: 4px;
          font-weight: 700;
        }
      }
    }
  }
}
.icon {
  color: rgb(255, 153, 0);
}
</style>
 