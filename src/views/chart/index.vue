<template>
  <div style="padding:10px">
        <a-row :gutter="10">
          <a-col :span="8">
            <div class="chart" ref="chart1" id="chart1"></div>
          </a-col>
          <a-col :span="8">
            <div class="chart" ref="chart2" id="chart2"></div>
          </a-col>
          <a-col :span="8">
            <div class="chart" ref="chart3" id="chart3"></div>
          </a-col>
        </a-row>
        <a-row :gutter="10" style="margin-top:10px">
          <a-col :span="24">
            <div class="chart" ref="chart4" id="chart4"></div>
          </a-col> 
        </a-row>
         <a-row :gutter="10" style="margin-top:10px">
          <a-col :span="24">
            <div class="chart" ref="chart5" id="chart5"></div>
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
  name: "Chart",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.chart1();
    this.chart2();
    this.chart3();
    this.chart4();
    this.chart5();
    this.chart6(); 
  },
  methods: {
    chart1() {
      let myChart = this.$echarts.init(document.getElementById("chart1"));
      myChart.setOption(option1);
    },
    chart2() {
      let myChart = this.$echarts.init(document.getElementById("chart2"));
      myChart.setOption(option2);
    },
    chart3() {
      let myChart = this.$echarts.init(document.getElementById("chart3"));
      myChart.setOption(option3);
    },
    chart4() {
      let myChart = this.$echarts.init(document.getElementById("chart4"));
      myChart.setOption(option4);
    },
    chart5() {
      let myChart = this.$echarts.init(document.getElementById("chart5"));
      myChart.setOption(option5);
    },
    chart6() {
      let myChart = this.$echarts.init(this.$refs.chart6);
      myChart.setOption(option6);
    },
  },
};
</script>
<style lang="less" scoped>
.chart {
  height: 300px;
  border: 1px solid silver;
}
</style>
