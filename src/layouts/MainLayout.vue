<template>
  <div id="components-layout-basic">
    <!--上中下垂直布局-->
    <a-layout v-if="appconfig.layout==='vertical'">
      <header-bar
        :fixedSideBar="appconfig.fixedSideBar"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :menuTheme="appconfig.menuTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <content-bar></content-bar>
      <footer-bar></footer-bar>
    </a-layout>

    <!--上中（side 左+content）下布局-->
    <a-layout
      v-if="appconfig.layout==='horizontal' && !appconfig.fixedSideBar && appconfig.fixedTopBar && appconfig.fixedSideBarToLeft"
    >
      <header-bar
        :fixedSideBar="appconfig.fixedSideBar"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :menuTheme="appconfig.menuTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <a-layout>
        <sider-bar :menuMode="appconfig.menuMode" :menuTheme="appconfig.menuTheme"></sider-bar>
        <content-bar></content-bar>
      </a-layout>
      <footer-bar></footer-bar>
    </a-layout>

    <!--上中（side 右+content）下布局-->
    <a-layout
      v-if="appconfig.layout==='horizontal' && !appconfig.fixedSideBar && appconfig.fixedTopBar  && !appconfig.fixedSideBarToLeft "
    >
      <header-bar
        :fixedSideBar="appconfig.fixedSideBar"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :menuTheme="appconfig.menuTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <a-layout>
        <content-bar></content-bar>
        <sider-bar></sider-bar>
      </a-layout>
      <footer-bar></footer-bar>
    </a-layout>

    <!--左右（header+content+footer）布局-->
    <a-layout v-if="appconfig.layout==='horizontal' && appconfig.fixedSideBar">
      <sider-bar
        :menuMode="appconfig.menuMode"
        :menuTheme="appconfig.menuTheme"
        :fixedSideBar="appconfig.fixedSideBar"
        :displayLogo="appconfig.displayLogo"
        :layout="appconfig.layout"
      ></sider-bar>
      <a-layout>
        <header-bar
          :fixedHeaderBar="appconfig.fixedHeaderBar"
          :fixedSideBar="appconfig.fixedSideBar"
          :layout="appconfig.layout"
          :menuMode="appconfig.menuMode"
          :menuTheme="appconfig.menuTheme"
          :displayLogo="appconfig.displayLogo"
        ></header-bar>
        <content-bar></content-bar>
        <footer-bar></footer-bar>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import appconfig from "@/config/appconfig";
import { HeaderBar, SiderBar, ContentBar, FooterBar } from "./components";
export default {
  name: "MainLayout",
  components: {
    HeaderBar,
    SiderBar,
    ContentBar,
    FooterBar
  },
  data() {
    return {
      appconfig: appconfig
    };
  },
  methods: {},
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {}
};
</script>
<style>
#components-layout-basic .ant-layout-content {
  background: silver;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}

#components-layout-basic .headerLogo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 30px 16px 0;
  float: left;
}

/**side */
#components-layout-basic .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-basic .trigger:hover {
  color: #1890ff;
}

#components-layout-basic .sideLogo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#components-layout-basic .theme-color {
  color:  rgb(255, 255, 255);
}
#components-layout-basic .theme-color:hover {
  color: #1890ff;
}
</style>
