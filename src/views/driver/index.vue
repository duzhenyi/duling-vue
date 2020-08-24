<template>
  <div style="padding:10px">
    <a-button @click.prevent.stop="start" type="primary">开始引导页</a-button>
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
// driver01.引入先手引导页依赖库 https://github.com/kamranahmedse/driver.js
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
// driver04.需要引导的页面中导入节点配置文件
import { driverStep } from "./driver";
import "driver.js/dist/driver.min.css";
export default {
  name: "Driver",
  components: {},
  data() {
    return {
      driver: null,
    };
  },
  created() {},
  mounted() {
    this.driver = new Driver({
      className: "div-left", // className to wrap driver.js popover
      animate: true, // 当改变突出显示的元素时动画
      opacity: 0.75, // 背景不透明度(0表示只有弹出窗口，没有叠加)
      padding: 10, // 元素从边缘周围的距离
      allowClose: true, // 点击叠加是否应该关闭
      overlayClickNext: false, // 它应该移动到下一步覆盖点击
      stageBackground: "#ffffff", // 突出显示元素的背景颜色
      doneBtnText: "完成",
      closeBtnText: "关闭",
      nextBtnText: "下一步",
      prevBtnText: "上一步",
      onHighlightStarted: (element) => {
        console.log(element);
      }, //元素即将突出显示时调用
      onHighlighted: (element) => {
        console.log(element);
      }, //元素完全突出显示时调用
      onDeselected: (element) => {
        console.log(element);
      }, //取消选择元素时调用
      onReset: (element) => {
        console.log(element);
      }, //当要清除叠加时调用
      onNext: (element) => {
        console.log(element);
      }, //在任何步骤中移动到下一步时调用
      onPrevious: (element) => {
        console.log(element);
      }, //在任何步骤中移动到上一步时调用
    });
  },

  methods: {
    // driver05.需要引导的页面中定义引导函数
    start() {
      this.$nextTick(() => {
        this.driver.defineSteps(driverStep);
        this.driver.start();
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
