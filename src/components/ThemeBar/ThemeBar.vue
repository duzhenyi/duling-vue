<template>
  <a-drawer
    placement="right"
    width="370"
    :closable="false"
    :visible="visible"
    :after-visible-change="afterVisibleChange"
    @close="onClose"
  >
    <a-form :model="form">
      <a-divider>布局设置</a-divider>
      <a-form-model-item label v-bind="formItemLayout">
        <a-radio-group
          @change="layoutChange"
          v-model="form.layout"
          :default-value="form.layout"
          button-style="solid"
        >
          <a-radio-button value="horizontal">水平布局</a-radio-button>
          <a-radio-button value="vertical">垂直布局</a-radio-button>
        </a-radio-group>
      </a-form-model-item>

      <a-divider>颜色配置</a-divider>
      <a-form-model-item label="菜单颜色" v-bind="formItemLayout">
        <color-select :color="form.menuColor" @selectColorFun="selectColorFun" type="sketch"></color-select>
      </a-form-model-item>

      <a-divider>顶栏设置</a-divider>
      <a-form-model-item label="顶部颜色" v-bind="formItemLayout" :default-value="form.headerTheme">
        <a-radio-group v-model="form.headerTheme">
          <a-radio value="dark">暗色</a-radio>
          <a-radio value="light">亮色</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="固定顶栏" v-bind="formItemLayout">
        <a-switch v-model="form.fixedHeaderBar" />
      </a-form-model-item>

      <a-form-model-item v-bind="formItemLayout" v-if="form.fixedHeaderBar">
        <span slot="label">
          置顶顶栏
          <a-tooltip title="需开启固定顶栏">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-switch v-model="form.topBar" />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayout" v-if="form.fixedHeaderBar">
        <span slot="label">
          下滑时隐藏顶栏
          <a-tooltip title="需开启固定顶栏">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-switch v-model="form.hideTopBarWhenSliding" />
      </a-form-model-item>

      <a-divider>侧边栏设置</a-divider>
      <a-form-model-item label="固定侧边栏" v-bind="formItemLayout">
        <a-switch v-model="form.fixedSideBar" />
      </a-form-model-item>
      <a-form-model-item label="侧边颜色" v-bind="formItemLayout">
        <a-radio-group v-model="form.sideTheme">
          <a-radio value="dark">暗色</a-radio>
          <a-radio value="light">亮色</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="展示到左侧" v-bind="formItemLayout">
        <a-switch v-model="form.fixedSideBarToLeft" />
      </a-form-model-item>
      <a-form-model-item label="开启手风琴模式" v-bind="formItemLayout">
        <a-switch v-model="form.sidebarOpensAccordionMode" />
      </a-form-model-item>
      <a-form-model-item label="显示折叠" v-bind="formItemLayout">
        <a-switch v-model="form.showCollapseSidebarButton" />
      </a-form-model-item>

      <a-divider>面包屑设置</a-divider>
      <a-form-model-item v-bind="formItemLayout">
        <span slot="label">
          显示面包屑导航
          <a-tooltip title="顶部菜单开启时无效">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-switch v-model="form.showGlobalBreadcrumbNavigation" />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayout">
        <span slot="label">
          面包屑显示图标
          <a-tooltip title="需开启面包屑导航">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-switch v-model="form.globalBreadcrumbDisplayIcon" />
      </a-form-model-item>

      <a-divider>页面设置</a-divider>
      <a-form-model-item label="显示重载页面按钮" v-bind="formItemLayout">
        <a-switch v-model="form.showReloadPageButton" />
      </a-form-model-item>
      <a-form-model-item label="开启多页签" v-bind="formItemLayout">
        <a-switch v-model="form.openMultipleTabs" />
      </a-form-model-item>
      <a-form-model-item label="显示多语言" v-bind="formItemLayout">
        <a-switch v-model="form.showMultilingualSelection" />
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button @click="onReset">恢复默认</a-button>
        <a-button style="margin-left: 10px;" type="primary" @click="onSubmit">保存</a-button>
      </a-form-model-item>
    </a-form>
  </a-drawer>
</template>
<script>
import Bus from "@/layouts/components/bus";
// 颜色组件
import ColorSelect from "../ColorSelect";

export default {
  name: "ThemeBar",
  components: {
    ColorSelect
  },
  data() {
    return {
      visible: false,
      formItemLayout: {
        labelAlign: "left",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 10 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 }
        }
      },
      form: {
        layout: "horizontal",
        // 菜单颜色
        menuColor: "#FFFFFF",
        // 顶部主题颜色 light dark
        headerTheme: "light",
        // 侧边栏主题颜色 light dark
        sideTheme: "light",
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: "inline",
        // 是否显示logo
        displayLogo: true,
        // 固定顶栏
        fixedHeaderBar: true,
        // 置顶顶栏 -需开启固定顶栏
        topBar: false,
        // 下滑时隐藏顶栏 -需开启固定顶栏
        hideTopBarWhenSliding: false,
        // 固定侧边栏
        fixedSideBar: true,
        // 侧边栏展示到左侧
        fixedSideBarToLeft: true,
        // 侧边栏开启手风琴模式
        sidebarOpensAccordionMode: false,
        // 显示折叠侧边栏按钮
        showCollapseSidebarButton: false,
        // 显示全局面包屑导航 -顶部菜单开启时无效
        showGlobalBreadcrumbNavigation: false,
        // 全局面包屑显示图标 -需开启全局面包屑导航
        globalBreadcrumbDisplayIcon: false,
        // 显示重载页面按钮
        showReloadPageButton: false,
        // 开启多页签
        openMultipleTabs: false,
        // 显示多语言选择
        showMultilingualSelection: false
      }
    };
  },
  created() {
    //兄弟组件点击图标按钮的时候传值过来
    Bus.$on("showThemeDrawer", val => {
      this.visible = val;
    });

    // 获取缓存里面的配置
    this.form.layout = this.$store.getters.layout;
    this.form.menuColor = this.$store.getters.menuColor;
    this.form.headerTheme = this.$store.getters.headerTheme;
    this.form.sideTheme = this.$store.getters.sideTheme;
    this.form.menuMode = this.$store.getters.menuMode;
    this.form.displayLogo = this.$store.getters.displayLogo;
    this.form.fixedHeaderBar = this.$store.getters.fixedHeaderBar;
    this.form.topBar = this.$store.getters.topBar;
    this.form.hideTopBarWhenSliding = this.$store.getters.hideTopBarWhenSliding;
    this.form.fixedSideBarToLeft = this.$store.getters.fixedSideBarToLeft;
    this.form.sidebarOpensAccordionMode = this.$store.getters.sidebarOpensAccordionMode;
    this.form.showCollapseSidebarButton = this.$store.getters.showCollapseSidebarButton;
    this.form.showGlobalBreadcrumbNavigation = this.$store.getters.showGlobalBreadcrumbNavigation;
    this.form.globalBreadcrumbDisplayIcon = this.$store.getters.globalBreadcrumbDisplayIcon;
    this.form.showReloadPageButton = this.$store.getters.showReloadPageButton;
    this.form.openMultipleTabs = this.$store.getters.openMultipleTabs;
    this.form.showMultilingualSelection = this.$store.getters.showMultilingualSelection;

    console.log("cacheTheme2:", this.form);
  },
  methods: {
    //颜色组件选择颜色后
    selectColorFun(val) {
      console.log("selectColorFun", val);
    },
    afterVisibleChange(val) {
      console.log("afterVisibleChange-visible", val);
    },
    onSubmit() {
      localStorage.setItem(
        "Duling-VUE-THEME",
        `{
            "layout":"${this.form.layout}",
            "menuColor":"${this.form.menuColor}",
            "headerTheme":"${this.form.headerTheme}",
            "sideTheme":"${this.form.sideTheme}",
            "menuMode":"${this.form.menuMode}",
            "displayLogo":${this.form.displayLogo},
            "fixedHeaderBar":${this.form.fixedHeaderBar},
            "topBar":${this.form.topBar},
            "hideTopBarWhenSliding":${this.form.hideTopBarWhenSliding},
            "fixedSideBarToLeft":${this.form.fixedSideBarToLeft},
            "sidebarOpensAccordionMode":${this.form.sidebarOpensAccordionMode},
            "showCollapseSidebarButton":${this.form.showCollapseSidebarButton},
            "showGlobalBreadcrumbNavigation":${this.form.showGlobalBreadcrumbNavigation},
            "globalBreadcrumbDisplayIcon":${this.form.globalBreadcrumbDisplayIcon},
            "showReloadPageButton":${this.form.showReloadPageButton},
            "openMultipleTabs":${this.form.openMultipleTabs},
            "showMultilingualSelection":${this.form.showMultilingualSelection}
          }`
      );
      this.setTheme();
      // 重写刷新页面
      location.reload();
    },
    onReset() {
      localStorage.removeItem("Duling-VUE-THEME");
      // 重写刷新页面
      location.reload();
    },
    onClose() {
      this.visible = false;
      //关闭的时候传值给兄弟组件
      Bus.$emit("showThemeDrawer", this.visible);
    },
    layoutChange(e) {
      this.$store.dispatch("setLayout", this.form.layout);
    },
    headerThemeChange(e) {
      this.$store.dispatch("setHeaderTheme", this.form.headerTheme);
    },
    setTheme() {
      //1. 更新状态管理器下面储存的主题配置信息
      this.$store.dispatch("setLayout", this.form.layout);
      this.$store.dispatch("setMenuColor", this.form.menuColor);
      this.$store.dispatch("setHeaderTheme", this.form.headerTheme);
      this.$store.dispatch("setSideTheme", this.form.sideTheme);
      this.$store.dispatch("setMenuMode", this.form.menuMode);
      this.$store.dispatch("setDisplayLogo", this.form.displayLogo);
      this.$store.dispatch("setFixedHeaderBar", this.form.fixedHeaderBar);
      this.$store.dispatch("setTopBar", this.form.topBar);
      this.$store.dispatch(
        "setHideTopBarWhenSliding",
        this.form.hideTopBarWhenSliding
      );
      this.$store.dispatch(
        "setFixedSideBarToLeft",
        this.form.fixedSideBarToLeft
      );
      this.$store.dispatch(
        "setSidebarOpensAccordionMode",
        this.form.sidebarOpensAccordionMode
      );
      this.$store.dispatch(
        "setShowCollapseSidebarButton",
        this.form.showCollapseSidebarButton
      );
      this.$store.dispatch(
        "setShowGlobalBreadcrumbNavigation",
        this.form.showGlobalBreadcrumbNavigation
      );
      this.$store.dispatch(
        "setGlobalBreadcrumbDisplayIcon",
        this.form.globalBreadcrumbDisplayIcon
      );
      this.$store.dispatch(
        "setShowReloadPageButton",
        this.form.showReloadPageButton
      );
      this.$store.dispatch("setOpenMultipleTabs", this.form.openMultipleTabs);
      this.$store.dispatch(
        "setShowMultilingualSelection",
        this.form.showMultilingualSelection
      );
    }
  }
};
</script>