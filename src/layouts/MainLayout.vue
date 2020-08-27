<template>
  <div id="components-layout-basic">
    <!--上中下垂直布局-->
    <a-layout v-if="appconfig.layout==='0'">
      <header-bar
        :menus="menus"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :headerTheme="appconfig.headerTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <content-bar ></content-bar>
      <footer-bar></footer-bar>
    </a-layout>

    <!--上中（side 左+content）下布局-->
    <a-layout v-if="appconfig.layout==='1'">
      <header-bar
        :menus="menus"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :headerTheme="appconfig.headerTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <a-layout>
        <sider-bar
          :menuMode="appconfig.menuMode"
          :sideTheme="appconfig.sideTheme" 
          :displayLogo="appconfig.displayLogo"
          :layout="appconfig.layout"
          :menus="menus"
        ></sider-bar>
        <content-bar></content-bar>
      </a-layout>
      <footer-bar></footer-bar>
    </a-layout>
 
    <!--上中（side 右+content）下布局-->
    <a-layout v-if="appconfig.layout==='2'"  >
      <header-bar
        :menus="menus"
        :layout="appconfig.layout"
        :menuMode="appconfig.menuMode"
        :headerTheme="appconfig.headerTheme"
        :displayLogo="appconfig.displayLogo"
      ></header-bar>
      <a-layout>
        <content-bar></content-bar>
        <sider-bar
          :menuMode="appconfig.menuMode"
          :sideTheme="appconfig.sideTheme"
          :displayLogo="appconfig.displayLogo"
          :layout="appconfig.layout"
          :menus="menus"
        ></sider-bar>
      </a-layout>
      <footer-bar></footer-bar>
    </a-layout>

    <!--左右（header+content+footer）布局-->
    <a-layout v-if="appconfig.layout==='3'">
      <sider-bar
        :menuMode="appconfig.menuMode"
        :sideTheme="appconfig.sideTheme" 
        :displayLogo="appconfig.displayLogo"
        :layout="appconfig.layout"
        :menus="menus"
      ></sider-bar>
      <a-layout>
        <header-bar
          :menus="menus"
          :layout="appconfig.layout"
          :menuMode="appconfig.menuMode"
          :headerTheme="appconfig.headerTheme"
          :displayLogo="appconfig.displayLogo"
        ></header-bar>
        <content-bar ></content-bar>
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
    FooterBar,
  },
  data() {
    return {
      appconfig: appconfig,
      menus: [],
    };
  },
  computed: {
    // 动态主路由
    // ...mapState({ cachedRoutes: state => state.route.cachedRoutes })
  },
  created() {
    this.menus = this.$store.getters.navRoutes;
    this.appconfig.layout = this.$store.getters.layout;
    this.appconfig.headerTheme = this.$store.getters.headerTheme;
    this.appconfig.sideTheme = this.$store.getters.sideTheme;
    this.appconfig.menuMode = this.$store.getters.menuMode;
    this.appconfig.displayLogo = this.$store.getters.displayLogo;
  },
  methods: {},
  watch: {},
  beforeCreate() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
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

/*滚动条的宽度*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/

::-webkit-scrollbar-track {
  width: 6px;
  background-color: #228eb6bd;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

/*滚动条的设置*/

::-webkit-scrollbar-thumb {
  background-color: #606d71;
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
/*滚动条移上去的背景*/

::-webkit-scrollbar-thumb:hover {
  background-color: #606d71;
}

.v-note-wrapper {
  z-index: 0 ;
}
</style>
