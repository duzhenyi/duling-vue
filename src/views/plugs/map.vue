<template>
  <div style="padding:10px">
    <baidu-map
      class="bm-view"
      center="成都"
      @ready="handler"
      :zoom="zoom"
      ak="q5mKBBV2lEQhyWp97Qiebx7hlHNSXjEp"
    >
      <bm-panorama></bm-panorama>
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>
<script>
// git地址：https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
// key: http://lbsyun.baidu.com/apiconsole/key */
import {
  BaiduMap,
  BmPanorama,
  //BmCityList,
  BmGeolocation,
  BmOverviewMap,
  BmMapType,
  BmScale,
  BmNavigation,
} from "vue-baidu-map";
export default {
  name: "Map",
  components: {
    BaiduMap,
    BmPanorama, // 全景
    //BmCityList, // 城市列表
    BmGeolocation, // 定位
    BmOverviewMap, // 地图缩略图
    BmMapType, // 地图类型
    BmScale, // 比例尺
    BmNavigation, // 缩放
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 15,
    };
  },
  created() {},
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
  },
};
</script>
<style lang="less"" scoped>
.bm-view {
  width: 100%;
  height: 600px;
}
</style>
