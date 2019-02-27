<template>
  <div>
      <span class="name">按省份选择：</span>
      <m-select :value="province"
                :list="provinceList"
                title="省份"
                chooseClass="province"
                :showWrapperActive="provinceActive"
                @change="changeprovince"
                @changeActive="changeProvinceActive"
                />
      <m-select :value="city"
                :list="cityList"
                title="城市"
                chooseClass="city"
                :showWrapperActive="cityActive"
                :disabled="disabledCity"
                @changeActive="changeCityActive"
                @change="changeCity"
                />
      <span>直接搜索:</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
        >
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
  </div>
</template>

<script>
import MSelect from '@/components/changeCity/MSelect'
import GetApi from 'ajax'
export default {
  data () {
    return {
        // 省份初始数据
      provinceList: [],
    //   标题名字
      province: "省份",
    //   城市初始数据
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
    //   标题名字
      city: "城市",
    //   城市是否选择展示
      cityActive: false,
    //   省份是否选择展示
      provinceActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: '',
      loading: false,
    //   选项列表是否可选
      disabledCity: true,
    }
  },
  created() {
    GetApi.getProvinceList().then((res) => {
      if (res.data.status == 'success') {

        this.provinceList = res.data.data.map((item) => {
          item.name = item.provinceName;
          return item;
        });
        // console.log(this.provinceList)
      }
    })
  },
  components: {
      MSelect
  },
  methods: {
    //   自定义事件changeActive展示城市列表
      changeCityActive(flag) {
        this.cityActive = flag;
        if (flag) {
            this.provinceActive = false;
        }
    },
   // 自定义事件change 改变value传入子组件的值 同时赋值城市列表数据 让城市选项框可选
      changeprovince (item) {
          this.province = item.name;
          this.cityList = item.cityInfoList;
          this.disabledCity = false;
          console.log(item)
      },
    //   自定义事件changeActive展示省份列表
      changeProvinceActive(flag) {
        //   console.log(flag)
        this.provinceActive = flag;
        if (flag) {
            this.cityActive = false;
        }
    },
    //   自定义事件change 改变value传入子组件的值
    changeCity(item) {
        this.city = item.name;
        console.log(item)
        this.$store.dispatch('setPosition', item);
        this.$router.push({name: 'indexPage'})
    },
    remoteMethod () {
        console.log(document.cookie, localStorage)
        // 请求后端接口
    }
  }

}
</script>
<style lang='scss'>
@import "~css/changecity/iselect.scss";
</style>
 