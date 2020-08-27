<template>
  <a-layout-sider v-model="collapsible" :trigger="null" collapsible>
    <!--logo 当左右布局的时候显示-->
    <div class="sideLogo" v-if="displayLogo && layout==='3'">
      <a href="/" class="router-link-active">
        <img class="logo" src="@/images/logo.png" />
        <a v-show="!collapsible">
          <h1 class="logo-title">Duling ADMIN</h1>
        </a>
      </a>
    </div>
    <!--左侧菜单-->
    <nav-bar
      v-if="layout!='0'"
      :navStyle="{'scrollbar-track-color':'#f629b9','overflow-y': 'auto', height: 'calc(100vh - 64px)'}"
      :default-selected-keys="['home']"
      :mode="menuMode"
      :theme="sideTheme"
      :menus="menus"
    ></nav-bar>
  </a-layout-sider>
</template>
<script>
import Bus from "../bus";
import NavBar from "_c/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      collapsible: false,
    };
  },
  created() {
    //从兄弟组件传值过来
    Bus.$on("displaySideMenu", (val) => {
      this.collapsible = val;
    });
  },
  methods: {},
  props: {
    // 全局布局方式 horizontal,vertical
    layout: {
      type: String,
      required: false,
    },
    // 是否显示logo
    displayLogo: {
      type: Boolean,
      required: false,
    },
    //主题颜色 string: light dark
    sideTheme: {
      type: String,
      required: false,
    },
    //菜单类型，现在支持垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inlin
    menuMode: {
      type: String,
      required: false,
    },

    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
/*滚动条的宽度*/
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
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
</style>