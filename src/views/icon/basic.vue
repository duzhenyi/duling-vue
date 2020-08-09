<template>
  <div>
    <a-divider>点击图标即可复制源码</a-divider>
    <a-card>
      <a-card-grid
        @click.native="handleCopyIcon(item.font_class,$event)"
        v-for="(item,index) in iconList"
        :key="index"
      >
        <a-tooltip>
          <template slot="title">{{ escapeHTM(item.font_class) }}</template>
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
      copyText:''
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
      return `<icon-font :type='${str}'></icon-font>`;
    },
    handleCopyIcon(str, event) {
      const txt= `<icon-font :type='${str}'></icon-font>`
      this.copyText = txt 
      clip(this.copyText, event);
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
