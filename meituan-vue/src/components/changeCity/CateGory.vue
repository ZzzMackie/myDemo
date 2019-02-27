<template>
  <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section " v-for="(item, index) in cityGroup" :key="index" :id="'city-'+ index">
            <dt>{{index}}</dt>
            <dd>
               <span  v-for="city in item" :key="city.id" @click="changeCity(city)"> {{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
import GetApi from 'ajax'
export default {
  data () {
    return {
        list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        cityList: [],
        cityGroup: {},
    }
  },
  created () {
      GetApi.getCityList().then((res) => {
            let data = res.data.data;
            let obj = {};
            data.forEach((item, index) => {
                if (!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            console.log(obj)
            this.cityGroup = obj;
        })
  },
  methods: {
      changeCity (city) {
          console.log(city)
          this.$store.commit('setPosition',city)
          this.$router.push({name: 'indexPage'})
      }
  }

}
</script>
<style lang='scss' scoped>
@import "~css/changecity/categroy.scss";
</style>
 