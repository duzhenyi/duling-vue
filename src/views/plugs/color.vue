<template>
  <div style="padding:10px">
    <a-card>
      <color-select :color="color" @selectColorFun="selectColorFun" type="sketch"></color-select>
    </a-card>
  </div>
</template>
<script>
// 颜色组件
import ColorSelect from "_c/ColorSelect";
export default {
  components: {
    ColorSelect,
  },
  data() {
    return {
      // 颜色
      color: "#FFFFFF",
    };
  },
};
</script>