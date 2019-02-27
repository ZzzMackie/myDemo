<template>
  <div class="amap-page-container">
      <el-amap  vid="amapDemo" :plugin="plugin" :center="center" :map-manager="AMapManager" :zoom="zoom" :events="events" class="amap-demo">
      </el-amap>
  </div>
</template>

<script>
import GetApi from "ajax";
import { AMapManager } from "vue-amap";
export default {
  data() {
      const self = this;
    return {
      msg: "vue-amap向你问好！",
      zoom: 12,
      center: [116.269163, 39.966103],
      AMapManager,
      events: {
        init(o) {
          let marker = new AMap.Marker({
            position: [116.269163, 39.966103]
          });

          marker.setMap(o);
        },
      },
      plugin: [{
          pName: 'MapType',
          defaultType: 0,
          showTraffic: true,
          showRoad: true
      }]
    };
  },
  created() {
    GetApi.getCurPoisition().then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang='scss' scoped>
.amap-page-container{
    padding: 0 10px 10px 10px;
}
.amap-demo {
    width: 250px;
  height: 300px;
}
</style>
 