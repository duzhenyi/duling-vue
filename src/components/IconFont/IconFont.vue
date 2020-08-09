<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-`+type" />
  </svg>
</template>
<script>
export default {
  name: "IconFont",
  data() {
    return {};
  },
  created() {
  },
  methods: {},
  props: {
    type: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="less" scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
 