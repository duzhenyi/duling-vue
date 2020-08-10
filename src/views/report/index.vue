<template>
  <div style="padding:10px">
        <a-row :gutter="10">
          <a-col :span="8">
            <div class="report" ref="report1" id="report1"></div>
          </a-col>
          <a-col :span="8">
            <div class="report" ref="report2" id="report2"></div>
          </a-col>
          <a-col :span="8">
            <div class="report" ref="report3" id="report3"></div>
          </a-col>
        </a-row>
        <a-row :gutter="10" style="margin-top:10px">
          <a-col :span="24">
            <div class="report" ref="report4" id="report4"></div>
          </a-col> 
        </a-row>
         <a-row :gutter="10" style="margin-top:10px">
          <a-col :span="24">
            <div class="report" ref="report5" id="report5"></div>
          </a-col>
        </a-row>
  </div>
</template>
<script>
import {
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
} from "./data";
export default {
  name: "Report",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.report1();
    this.report2();
    this.report3();
    this.report4();
    this.report5();
    this.report6(); 
  },
  methods: {
    report1() {
      let myChart = this.$echarts.init(document.getElementById("report1"));
      myChart.setOption(option1);
    },
    report2() {
      let myChart = this.$echarts.init(document.getElementById("report2"));
      myChart.setOption(option2);
    },
    report3() {
      let myChart = this.$echarts.init(document.getElementById("report3"));
      myChart.setOption(option3);
    },
    report4() {
      let myChart = this.$echarts.init(document.getElementById("report4"));
      myChart.setOption(option4);
    },
    report5() {
      let myChart = this.$echarts.init(document.getElementById("report5"));
      myChart.setOption(option5);
    },
    report6() {
      let myChart = this.$echarts.init(this.$refs.report6);
      myChart.setOption(option6);
    },
  },
};
</script>
<style lang="less" scoped>
.report {
  height: 300px;
  border: 1px solid silver;
}
</style>
