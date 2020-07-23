<template>
  <a-menu
    :style="navStyle"
    :default-selected-keys="defaultSelectedKeys"
    :mode="mode"
    :theme="theme"
    :inline-collapsed="collapsed"
    @select="onSelect"
  >
    <template v-for="item in menus">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon :type="item.icon" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-menu>
</template>
<script>
import SubMenu from "./SubMenu";
export default {
  components: {
    "sub-menu": SubMenu
  },
  name: "NavBar",
  data() {
    return {};
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作
  mounted() {
    this.loadNav();
  },
  methods: {
    loadNav() {
      console.log("----------menus：---------------");
      console.log(this.menus);
      console.log("-------------------------");
    },
    onSelect() {}
  },
  created() {},
  props: {
    navStyle: {
      type: Object,
      required: false
    },
    defaultSelectedKeys: {
      type: Array,
      required: false,
      default: []
    },
    mode: {
      type: String,
      required: false,
      default: "horizontal"
    },
    theme: {
      type: String,
      required: false,
      default: "dark"
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
</style>

 