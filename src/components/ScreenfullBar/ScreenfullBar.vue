<template>
  <a-tooltip placement="top" :title="title">
    <a-icon @click="clickFullscreen" :type="icon"></a-icon>
  </a-tooltip>
</template>
<script>
import screenfull from "screenfull";
export default {
  name: "ScreenfullBar",
  data() {
    return {
      // tips提示
      title: "进入全屏",
      // 图标样式
      icon: "fullscreen"
    };
  },
  methods: {
    clickFullscreen() {
      if (!screenfull.isEnabled) {
        this.$message.error("开启全屏失败");
        return false;
      }
      screenfull.toggle();
      this.icon = screenfull.isFullscreen ?  "fullscreen": "fullscreen-exit";
      this.title = screenfull.isFullscreen ? "进入全屏" : "退出全屏";
    }
  }
};
</script>