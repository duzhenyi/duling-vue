<template>
  <a-layout-sider v-model="collapsible" :trigger="null" collapsible>
    <!--logo-->
    <div class="sideLogo" v-if="displayLogo && fixedSideBar" />
    <!--左侧菜单-->
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :mode="menuMode"
      :theme="menuTheme"
    >
      <a-menu-item key="1">
        <a-icon type="mail" />
         <span>Navigation One</span> 
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="calendar" /> <span>Navigation Two</span> 
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="appstore" />
          <span>Navigation Three</span>
        </span>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="setting" />
          <span>Navigation Four</span>
        </span>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import Bus from "../bus";
export default {
  data() {
    return {
      collapsible: false
    };
  },
  created() {
    //从兄弟组件传值过来
    Bus.$on("displaySideMenu", val => {
      this.collapsible = val;
    });
  },
  methods: {},
  props: {
    //左中右布局，固定左侧side
    fixedSideBar: {
      type: Boolean,
      required: false,
      default: false
    },
    //菜单类型，现在支持垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inlin
    menuMode: {
      type: String,
      required: false,
      default: "horizontal"
    },
    //主题颜色 string: light dark
    menuTheme: {
      type: String,
      required: false,
      default: "dark"
    },
    // 全局布局方式 horizontal,vertical
    layout: {
      type: String,
      required: false,
      default: "horizontal"
    },
    // 是否显示logo
    displayLogo: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>
<style scoped>
</style>