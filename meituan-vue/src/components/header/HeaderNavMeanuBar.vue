<template>
  <div class="m-nav">
      <ul class="nav">
        <li class="list">
          <router-link to="/">我的美团</router-link>
          <dl>
            <dd>
              <router-link to="/">我的订单</router-link>
            </dd>
            <dd>
              <router-link to="/">我的收藏</router-link>
            </dd>
            <dd>
              <router-link to="/">抵用券</router-link>
            </dd>
            <dd>
              <router-link to="/">账户设置</router-link>
            </dd>
          </dl>
        </li>
        <li>
          <router-link to="/">手机APP</router-link>
        </li>
        <li class="list bd">
          <router-link to="/">商家中心</router-link>
          <dl>
            <dd>
              <router-link to="/">登录商家中心</router-link>
            </dd>
            <dd>
              <router-link to="/">美团智能收银</router-link>
            </dd>
            <dd>
              <router-link to="/">我想合作</router-link>
            </dd>
            <dd>
              <router-link to="/">手机免费开店</router-link>
            </dd>
            <dd>
              <router-link to="/">餐饮代理商招募</router-link>
            </dd>
            <dd>
              <router-link to="/">商家申请开票</router-link>
            </dd>
            <dd>
              <router-link to="/">免费合作美团排队</router-link>
            </dd>
          </dl>
        </li>
        <li class="list">
          <router-link to="/">网站导航</router-link>
          <div class="subContainer">
            <dl class="hotel">
              <dt>酒店旅游</dt>
              <dd v-for="item in hotelList"
                  :key="item">
                <router-link to="/">{{item}}</router-link>
              </dd>
            </dl>
            <dl class="food">
              <dt>吃美食</dt>
              <dd v-for="item in foodList"
                  :key="item">
                <router-link to="/">{{item}}</router-link>
              </dd>
            </dl>
            <dl class="movie">
              <dt>看电影</dt>
              <dd v-for="item in movieList"
                  :key="item">
                <router-link to="/">{{item}}</router-link>
              </dd>
            </dl>
            <dl class="app">
              <dt>手机应用</dt>
              <dd v-for="item in appList" :key="item.title">
                <img :src="item.src" :title="item.title" :alt="item.title"/>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotelList: ['国际机票', '火车票', '蒸锅名宿', '经济型酒店', '主题酒店', '商务酒店', '公寓', '豪华酒店', '客栈', '青年旅社', '度假酒店', '别墅', '农家院'],
      foodList: ['烤鱼', '特色小吃', '烧烤', '自助餐', '火锅', '代金券'],
      movieList: ['热映电影', '热门影院', '热映电影口碑版', '最受期待电影', '国内票房榜', '北美票房榜', '电影排行榜'],
      appList: [
        {
          src: '//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png',
          title: '美团App'
        },
        {
          src: '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
          title: '外卖App'
        },
        {
          src: '//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png',
          title: '臻果App'
        },
        {
          src: '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
          title: '点评App'
        },
        {
          src: '//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/maoyan.png',
          title: '猫眼App'
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
