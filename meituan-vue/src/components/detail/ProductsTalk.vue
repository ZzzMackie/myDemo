<template>
  <div class="container">
      <div class="container-list" v-for="(item,index) in commend" :key="index">
          <div class="list-header">
              <img :src="item.image" alt="">
          </div>
          <div class="list-info">
              <div class="name">{{item.username}}</div>
              <div class="date">
                  <span>2018-03-06</span>
              </div>
              <div class="source">
                  <div class="start-icon">
                      <i :class="{'el-icon-star-on':item.rate >= 1, 'el-icon-star-off':item.rate < 1, 'icon':true}" ></i>
                      <i :class="{'el-icon-star-on':item.rate >= 2, 'el-icon-star-off':item.rate < 2, 'icon':true}" ></i>
                      <i :class="{'el-icon-star-on':item.rate >= 3, 'el-icon-star-off':item.rate < 3, 'icon':true}" ></i>
                      <i :class="{'el-icon-star-on':item.rate >= 4, 'el-icon-star-off':item.rate < 4, 'icon':true}" ></i>
                      <i :class="{'el-icon-star-on':item.rate >= 5, 'el-icon-star-off':item.rate < 5, 'icon':true}" ></i>
                  </div>
              </div>
              <div class="desc">{{item.evalaute}}</div>
              <div class="like-con">
                  <div class="like">
                      <b></b>
                      <span>赞</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["commend"],
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.container {
  background: #fff;
  padding: 15px;
  .container-list {
    display: flex;
    padding: 30px 0 0;
    .list-header {
      border-radius: 50%;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .list-info {
      padding-left: 20px;
      .name {
        font-size: 16px;
        color: #222;
        line-height: 22px;
        margin-bottom: 1px;
      }
      .date {
        font-size: 12px;
        line-height: 20px;
        color: #999;
        span {
          float: right;
        }
      }
      .source {
        line-height: 14px;
        margin-top: 3px;
        height: 16px;
        font-size: 11px;
      }
      .desc {
        font-size: 14px;
        line-height: 20px;
        padding-top: 13px;
      }
      .like-con {
        text-align: right;
        margin: 17px 0 16px;
        .like {
          display: inline-block;
          cursor: pointer;
          font-size: 12px;
          color: #666;
          span{
              vertical-align: middle;
          }
        }
      }
    }
  }
}
b {
  background-image: url("~@/assets/img/s.png");
  background-size: 100% 100%;
  width: 15px;
  height: 16px;
  display: inline-block;
  margin-right: 6px;
  vertical-align: text-bottom;
}
.icon {
  color: rgb(255, 153, 0);
}
</style>
 