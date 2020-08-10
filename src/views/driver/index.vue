<template>
  <div style="padding:10px">
    <a-button @click="start" type="primary">开始引导页</a-button>
    <a-divider />
    <div class="div-left">
      <div style="background:silver;" id="step1">第一步</div>
      <div style=" background:red;" id="step2">第二步</div>
      <div style=" background:blue;" id="step3">第三步</div>
      <div style=" background:green;" id="step4">第四步</div>
      <div style=" background: rgb(16 57 172 / 84%);" id="step5">第五步</div>
    </div>
  </div>
</template>

<script>
// driver04.需要引导的页面中导入节点配置文件
import { driverStep } from "./driver";
// import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
export default {
  name: "Driver",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    // driver05.需要引导的页面中定义引导函数
    start() {
      this.$nextTick(() => {
        this.$driver.defineSteps(driverStep);
        this.$driver.start();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.div-left div {
  float: left;
  width: 100px;
  height: 60px;
  margin-left: 30px;
  vertical-align: middle;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
</style>
