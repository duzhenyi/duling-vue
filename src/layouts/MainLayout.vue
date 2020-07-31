<template>
  <div id="components-layout-basic">
    <!--上中下垂直布局-->
    <a-layout v-if="appconfig.layout==='vertical'">
      <header-bar
        :fixedSideBar="appconfig.fixedSideBar"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :headerTheme="appconfig.headerTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <content-bar
        :openMultipleTabs="appconfig.openMultipleTabs"
        :showGlobalBreadcrumbNavigation="appconfig.showGlobalBreadcrumbNavigation"
        :globalBreadcrumbDisplayIcon="appconfig.globalBreadcrumbDisplayIcon"
      ></content-bar>
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
        :headerTheme="appconfig.headerTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <a-layout>
        <sider-bar
          :menuMode="appconfig.menuMode"
          :sideTheme="appconfig.sideTheme"
          :fixedSideBar="appconfig.fixedSideBar"
          :displayLogo="appconfig.displayLogo"
          :layout="appconfig.layout"
          :menus="menus"
        ></sider-bar>
        <content-bar
          :openMultipleTabs="appconfig.openMultipleTabs"
          :showGlobalBreadcrumbNavigation="appconfig.showGlobalBreadcrumbNavigation"
          :globalBreadcrumbDisplayIcon="appconfig.globalBreadcrumbDisplayIcon"
        ></content-bar>
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
        :headerTheme="appconfig.headerTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <a-layout>
        <content-bar
          :openMultipleTabs="appconfig.openMultipleTabs"
          :showGlobalBreadcrumbNavigation="appconfig.showGlobalBreadcrumbNavigation"
          :globalBreadcrumbDisplayIcon="appconfig.globalBreadcrumbDisplayIcon"
        ></content-bar>

        <sider-bar
          :menuMode="appconfig.menuMode"
          :sideTheme="appconfig.sideTheme"
          :fixedSideBar="appconfig.fixedSideBar"
          :displayLogo="appconfig.displayLogo"
          :layout="appconfig.layout"
          :menus="menus"
        ></sider-bar>
      </a-layout>
      <footer-bar></footer-bar>
    </a-layout>

    <!--左右（header+content+footer）布局-->
    <a-layout v-if="appconfig.layout==='horizontal' && appconfig.fixedSideBar">
      <sider-bar
        :menuMode="appconfig.menuMode"
        :sideTheme="appconfig.sideTheme"
        :fixedSideBar="appconfig.fixedSideBar"
        :displayLogo="appconfig.displayLogo"
        :layout="appconfig.layout"
        :menus="menus"
      ></sider-bar>
      <a-layout>
        <header-bar
          :fixedHeaderBar="appconfig.fixedHeaderBar"
          :fixedSideBar="appconfig.fixedSideBar"
          :layout="appconfig.layout"
          :menuMode="appconfig.menuMode"
          :headerTheme="appconfig.headerTheme"
          :displayLogo="appconfig.displayLogo"
        ></header-bar>
        <content-bar
          :openMultipleTabs="appconfig.openMultipleTabs"
          :showGlobalBreadcrumbNavigation="appconfig.showGlobalBreadcrumbNavigation"
          :globalBreadcrumbDisplayIcon="appconfig.globalBreadcrumbDisplayIcon"
        ></content-bar>
        <footer-bar></footer-bar>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import appconfig from "@/config/appconfig";
import { mapState } from "vuex";
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
      appconfig: appconfig,
      menus: []
    };
  },
  computed: {
    // 动态主路由
    // ...mapState({ cachedRoutes: state => state.route.cachedRoutes })
  },
  created() {
    this.menus = this.$store.getters.navRoutes;
    this.appconfig.layout = this.$store.getters.layout;
    this.appconfig.menuColor = this.$store.getters.menuColor;
    this.appconfig.headerTheme = this.$store.getters.headerTheme;
    this.appconfig.sideTheme = this.$store.getters.sideTheme;
    this.appconfig.menuMode = this.$store.getters.menuMode;
    this.appconfig.displayLogo = this.$store.getters.displayLogo;
    this.appconfig.fixedHeaderBar = this.$store.getters.fixedHeaderBar;
    this.appconfig.topBar = this.$store.getters.topBar;
    this.appconfig.hideTopBarWhenSliding = this.$store.getters.hideTopBarWhenSliding;
    this.appconfig.fixedSideBarToLeft = this.$store.getters.fixedSideBarToLeft;
    this.appconfig.sidebarOpensAccordionMode = this.$store.getters.sidebarOpensAccordionMode;
    this.appconfig.showCollapseSidebarButton = this.$store.getters.showCollapseSidebarButton;
    this.appconfig.showGlobalBreadcrumbNavigation = this.$store.getters.showGlobalBreadcrumbNavigation;
    this.appconfig.globalBreadcrumbDisplayIcon = this.$store.getters.globalBreadcrumbDisplayIcon;
    this.appconfig.showReloadPageButton = this.$store.getters.showReloadPageButton;
    this.appconfig.openMultipleTabs = this.$store.getters.openMultipleTabs;
    this.appconfig.showMultilingualSelection = this.$store.getters.showMultilingualSelection;
  },
  methods: {},
  watch: {},
  beforeCreate() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  }
};
</script>
<style lang="less">
.ant-layout-content {
  background: #f0f2f5;
  color: #ffff;
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
  /* font-size: 18px; */
  line-height: 64px;
  /* padding: 0 24px; */
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-basic .trigger:hover {
  color: #1890ff;
}

#components-layout-basic .sideLogo {
  height: 32px;
  margin: 16px 0px 16px 22px;
}
#components-layout-basic .theme-color {
  color: rgb(255, 255, 255);
}
#components-layout-basic .theme-color:hover {
  color: #1890ff;
}

/*logo样式 */
.logo {
  width: 35px;
  height: 100%;
  vertical-align: middle;
  display: inline-block;
}
.logo-title {
  color: #ffff;
  font-size: 16px;
  margin: 0 0 0 12px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
  vertical-align: middle;
  display: inline-block;
}
#components-layout-basic .ant-tabs-bar {
  margin: 0;
  border-bottom: 0px;
}
</style>
