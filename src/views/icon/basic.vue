<template>
  <div>
    <a-divider>点击图标即可复制源码</a-divider>
    <a-card>
      <a-card-grid
        @click.stop="handleCopyIcon(item.font_class,$event)"
        v-for="(item,index) in iconList"
        :key="index"
      >
        <a-tooltip>
          <template slot="title">{{ escapeHTM(item.font_class) }}</template>
          <span></span>
          <icon-font :type="item.font_class"></icon-font>
          <a-card-meta :title="item.font_class" />
        </a-tooltip>
      </a-card-grid>
    </a-card>
  </div>
</template>
<script>
import clip from "@/helper/clipboard";
import IconFont from "_c/IconFont";
import iconfontData from "@/assets/iconfont/iconfont.json";
export default {
  components: {
    IconFont,
  },
  name: "Basic",
  data() {
    return {
      iconList: [],
    };
  },
  created() {
    this.loadIconList();
  },
  methods: {
    loadIconList() {
      this.iconList = iconfontData.glyphs;
    },
    escapeHTM(str) {
      return `<icon-font :type='${str}'/>`;
    },
    handleCopyIcon(str, event) {
      debugger;
      const txt = "<icon-font :type='" + str + "'/>";
      clip(txt, event, this);
    },
  },
};
</script> 
<style lang="less" scoped>
.ant-card-grid {
  width: 20%;
  text-align: center;
  cursor: pointer;
}

.ant-card-grid:hover {
  background-color: #1890ff;
  color: #fff;
  .ant-card-meta-title:hover {
    color: #fff !important;
  }
}
</style>
