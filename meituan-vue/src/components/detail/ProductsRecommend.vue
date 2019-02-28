<template>
  <div class="container">
      <ul class="container-img">
          <li><img src="@/assets/img/food1.jpg" alt=""></li>
          <li><img src="@/assets/img/food2.jpg" alt=""></li>
          <li><img src="@/assets/img/food3.jpg" alt=""></li>
          <li><img src="@/assets/img/food4.jpg" alt=""></li>
          <li><img src="@/assets/img/food5.jpg" alt=""></li>
          <li><img src="@/assets/img/food6.jpg" alt=""></li>
      </ul>
      <div class="container-list">
          <span v-for="item in recommend" :key="item">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: ["recommend"],
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
* {
  list-style: none;
}
.container {
  display: inline-block;
  background: #fff;
  padding: 15px;
  .container-img{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
  }
  .container-list {
    padding: 5px;
    span {
      display: inline-block;
      float: left;
      margin: 0 20px 19px 0;
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }
  }
}
</style>
 