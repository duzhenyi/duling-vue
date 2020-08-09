<template>
  <a-row>
    <a-col :span="24">
      <a-row :gutter="10">
        <a-col :span="16">
          <a-row>
            <a-col :span="24">
              <a-alert
                message="此UI是作为一个.NET 后端开发者第一次学习并且开源的一款基于Ant Design Vue完全开源的后端框架，仅供参考学习，作者QQ：295611875"
                type="success"
              />
              <a-card title size="small" :bordered="true">
                <a-statistic-countdown title="网站已运行" :value="deadline" format="D天H时m分s秒" />
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="10" class="el-top">
            <a-col :span="6">
              <a-card hoverable style="background:rgb(255, 157, 77);">
                <a-statistic title="用户总数" :value="1128" style="margin-right: 10px;">
                  <template #suffix>
                    <a-icon type="like" />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable style="background:#2db7f5;">
                <a-statistic title="用户总数" :value="1128" style="margin-right: 10px">
                  <template #suffix>
                    <a-icon type="like" />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable style="background:#87d068;">
                <a-statistic title="会员总数" :value="1128" style="margin-right: 10px">
                  <template #suffix>
                    <a-icon type="like" />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable style="background:rgb(212, 195, 233);">
                <a-statistic title="订单数量" :value="1128" style="margin-right: 10px">
                  <template #suffix>
                    <a-icon type="like" />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
          </a-row>

          <a-row class="el-top">
            <a-col :span="24">
              <a-carousel arrows>
                <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
                  <a-icon type="left-circle" />
                </div>
                <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
                  <a-icon type="right-circle" />
                </div>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </a-carousel>
            </a-col>
          </a-row>

          <a-row class="el-top">
            <a-col :span="24">
              <a-collapse expand-icon-position="right">
                <a-collapse-panel key="1" header="This is panel header 1">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="This is panel header 2">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="This is panel header 3">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
                </a-collapse-panel>
              </a-collapse>
            </a-col>
          </a-row>
        </a-col>

        <!--右侧-->
        <a-col :span="8">
          <a-row>
            <a-col :span="24">
              <a-card title="联系作者" size="small">
                <a-popover title="扫码联系作者微信">
                  <template slot="content">
                    <p>
                      <img src="/" />
                    </p>
                  </template>
                  <a-tag color="blue">
                    <a-icon type="wechat" />微信
                  </a-tag>
                </a-popover>
                <a-tooltip title="点击加作者QQ吧">
                  <a-tag color="pink">
                    <a-icon type="qq" />QQ
                  </a-tag>
                </a-tooltip>
                <a-tooltip title="点击进入QQ群">
                  <a-tag color="red">
                    <a-icon type="green" />QQ群
                  </a-tag>
                </a-tooltip>
                <a-tooltip title="跳转到github开源地址">
                  <a-tag color="orange">
                    <a-icon type="github" />GitHub
                  </a-tag>
                </a-tooltip>
                <a-tooltip title="跳转到码云开源地址">
                  <a-tag color="cyan">码云</a-tag>
                </a-tooltip>
              </a-card>
            </a-col>
          </a-row>

          <a-row :gutter="10" class="el-top">
            <a-col :span="12">
              <a-card hoverable>
                <img
                  slot="cover"
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />

                <a-statistic
                  title="今日访问"
                  :value="11.28"
                  :precision="2"
                  suffix="%"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 10px"
                >
                  <template #prefix>
                    <a-icon type="arrow-up" />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card hoverable>
                <img
                  slot="cover"
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                <a-statistic
                  title="本月访问"
                  :value="9.3"
                  :precision="2"
                  suffix="%"
                  class="demo-class"
                  :value-style="{ color: '#cf1322' }"
                >
                  <template #prefix>
                    <a-icon type="arrow-down" />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
          </a-row>

          <a-row class="el-top">
            <a-col :span="24">
              <a-card>
                <p>
                  内存使用
                  <a-progress :percent="30.9" :stroke-color="{'0%': '#108ee9','100%': '#87d068',}" />
                </p>
                <p>
                  CPU使用
                  <a-progress :percent="76.9" :stroke-color="{'0%': '#108ee9','100%': '#87d068',}" />
                </p>
                <p>
                  磁盘使用
                  <a-progress :percent="50" status="active" />
                </p>
              </a-card>
            </a-col>
          </a-row>
        </a-col>
      </a-row>

      <!--第二行 一排图标-->
      <a-row :gutter="10" class="el-top">
        <a-col :span="4" style="text-align:center">
          <a-card hoverable>
            <a-icon
              slot="cover"
              type="smile"
              :style="{ fontSize: '48px',marginTop:'30px' }"
              theme="twoTone"
            />
            <a-card-meta title>
              <template slot="description">www.bswz.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="4" style="text-align:center">
          <a-card hoverable>
            <a-icon
              slot="cover"
              type="heart"
              theme="twoTone"
              :style="{ fontSize: '48px',marginTop:'30px' }"
              two-tone-color="#eb2f96"
            />
            <a-card-meta title>
              <template slot="description">www.bswz.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="4" style="text-align:center">
          <a-card hoverable>
            <a-icon
              slot="cover"
              type="property-safety"
              theme="twoTone"
              :style="{ fontSize: '48px' ,marginTop:'30px'}"
              two-tone-color="#32c41a"
            />
            <a-card-meta title>
              <template slot="description">www.bswz.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="4" style="text-align:center">
          <a-card hoverable>
            <a-icon
              slot="cover"
              type="video-camera"
              :style="{ fontSize: '48px',marginTop:'30px' }"
              theme="twoTone"
              two-tone-color="#52c41a"
            />
            <a-card-meta title>
              <template slot="description">www.bswz.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="4" style="text-align:center">
          <a-card hoverable>
            <a-icon
              slot="cover"
              type="cloud"
              theme="twoTone"
              :style="{ fontSize: '48px',marginTop:'30px' }"
              two-tone-color="#eb2f96"
            />
            <a-card-meta title>
              <template slot="description">www.bswz.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="4" style="text-align:center">
          <a-card hoverable>
            <a-icon
              slot="cover"
              type="car"
              :style="{ fontSize: '48px' ,marginTop:'30px'}"
              theme="twoTone"
              two-tone-color="#eb2f36"
            />
            <a-card-meta title>
              <template slot="description">www.bswz.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>

      <!--第三行-->
      <a-row :gutter="10" class="el-top">
        <!--图表-->
        <a-col :span="18">
          <a-card>
            <div style="height:300px" ref="ee1" id="ee1"></div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <!--更新日志-->
          <a-row class="el-top">
            <a-col :span="24">
              <a-card title="更新日志" size="small">
                <a-timeline pending="小弟拼命搬砖中..." :reverse="false">
                  <a-timeline-item color="green">
                    <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />2020年8月6号完成首页页面搭建
                  </a-timeline-item>
                  <a-timeline-item color="gray">2020年7月27号完成菜单导航</a-timeline-item>
                  <a-timeline-item color="gray">2020年7月20号完成布局搭建</a-timeline-item>
                  <a-timeline-item color="gray">2020年6月22号开始搭建此框架</a-timeline-item>
                </a-timeline>
              </a-card>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: "Home1",
  components: {},
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
    };
  },
  created() {
  },
  mounted() {
    this.loadCharts();
  },
  methods: {
    loadCharts() {
      let option = {
        title: {
          text: "最新数据显示",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      var eel = document.getElementById("ee1"); //this.$refs.ee1;
      let myChart = this.$echarts.init(eel);
      myChart.setOption(option);
    },
    onFinish() {
      console.log("finished!");
    },
  },
};
</script>
<style lang="stylus" scoped></style>
<style scoped>
.el-top {
  margin-top: 10px;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>