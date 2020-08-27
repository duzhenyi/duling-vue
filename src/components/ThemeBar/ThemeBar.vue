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
      <a-form-model-item :labelCol="{ span: 0 }" :wrapperCol="{span: 24}">
        <div
          @click="layoutChange('0')"
          :class="form.layout==='0'? 'contaner-div contaner-div-active':'contaner-div'"
        >
          <div class="hedaer-div"></div>
          <div style="background:rgba(238, 232, 232, 0.952);height:40px;"></div>
          <div style="background:rgb(114, 122, 114);height:10px;"></div>
        </div>
        <div
          @click="layoutChange('1')"
          :class="form.layout==='1'? 'contaner-div contaner-div-active':'contaner-div'"
        >
          <div class="hedaer-div"></div>
          <div style="height:40px;">
            <div class="side-div"></div>
            <div class="content-div"></div>
          </div>
          <div class="foot-div"></div>
        </div>

        <div
          @click="layoutChange('2')"
          :class="form.layout==='2'? 'contaner-div contaner-div-active':'contaner-div'"
        >
          <div class="hedaer-div"></div>
          <div style="height:40px;">
            <div class="content-div"></div>
            <div class="side-div"></div>
          </div>
          <div class="foot-div"></div>
        </div>

        <div
          @click="layoutChange('3')"
          :class="form.layout==='3'? 'contaner-div contaner-div-active':'contaner-div'"
        >
          <div style="background:rgb(33, 33, 41);height:60px;width:10px;float:left;"></div>
          <div style="height:60px;width:50px;float:left;">
            <div style="background:rgb(35, 137, 204);width:50px;height:10px;float:left;"></div>
            <div style="background:rgba(238, 232, 232, 0.952);width:50px;height:40px;float:left;"></div>
            <div style="background:rgb(114, 122, 114);width:50px;height:10px;float:left;"></div>
          </div>
        </div>
        <!-- <a-radio-group
          @change="layoutChange"
          v-model="form.layout"
          :default-value="form.layout"
          button-style="solid"
        >
          <a-radio-button value="0">上中下</a-radio-button>
          <a-radio-button value="1">左侧菜单</a-radio-button>
          <a-radio-button value="2">右侧菜单</a-radio-button>
          <a-radio-button value="3">顶部菜单</a-radio-button>
        </a-radio-group>-->
      </a-form-model-item>

      <a-divider>颜色配置</a-divider>
      <a-form-model-item label="顶部颜色" v-bind="formItemLayout" :default-value="form.headerTheme">
        <a-radio-group v-model="form.headerTheme">
          <a-radio value="dark">暗色</a-radio>
          <a-radio value="light">亮色</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="侧边颜色" v-bind="formItemLayout">
        <a-radio-group v-model="form.sideTheme">
          <a-radio value="dark">暗色</a-radio>
          <a-radio value="light">亮色</a-radio>
        </a-radio-group>
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

export default {
  name: "ThemeBar",
 
  data() {
    return {
      visible: false,
      formItemLayout: {
        labelAlign: "left",
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      },
      form: {
        // 0. Header+Content+Footer
        // 1. Header+(Sider+Content)+Footer
        // 2. Header+(Content+Sider)+Footer
        // 3. Sider+(Header+Content+Footer)
        layout: "0",
        // 顶部主题颜色 light dark
        headerTheme: "light",
        // 侧边栏主题颜色 light dark
        sideTheme: "light",
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: "inline",
        // 是否显示logo
        displayLogo: true,
      },
    };
  },
  created() {
    //兄弟组件点击图标按钮的时候传值过来
    Bus.$on("showThemeDrawer", (val) => {
      this.visible = val;
    });
    // 获取缓存里面的配置
    this.form.layout = this.$store.getters.layout; 
    this.form.headerTheme = this.$store.getters.headerTheme;
    this.form.sideTheme = this.$store.getters.sideTheme;
    this.form.menuMode = this.$store.getters.menuMode;
    this.form.displayLogo = this.$store.getters.displayLogo;
  },
  methods: {
    //颜色组件选择颜色后
    selectColorFun(val) {},
    afterVisibleChange(val) {},
    onSubmit() {
      this.form.menuMode = this.form.layout === "0" ? "horizontal" : "inline";
      localStorage.setItem(
        "Duling-VUE-THEME",
        `{
            "layout":"${this.form.layout}", 
            "headerTheme":"${this.form.headerTheme}",
            "sideTheme":"${this.form.sideTheme}",
            "menuMode":"${this.form.menuMode}",
            "displayLogo":${this.form.displayLogo}
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
    layoutChange(layout) {
      this.form.layout = layout;
      this.form.menuMode = this.form.layout === "0" ? "horizontal" : "inline";
      this.$store.dispatch("setMenuMode", this.form.menuMode);
      this.$store.dispatch("setLayout", this.form.layout);
    },
    headerThemeChange(e) {
      this.$store.dispatch("setHeaderTheme", this.form.headerTheme);
    },
    setTheme() {
      this.$store.dispatch("setLayout", this.form.layout); 
      this.$store.dispatch("setHeaderTheme", this.form.headerTheme);
      this.$store.dispatch("setSideTheme", this.form.sideTheme);
      this.$store.dispatch("setMenuMode", this.form.menuMode);
      this.$store.dispatch("setDisplayLogo", this.form.displayLogo);
    },
  },
};
</script>
<style lang="css" scoped>
.contaner-div {
  width: 60px;
  height: 60px;
  float: left;
  margin-left: 20px;
  cursor: pointer;
  box-shadow: 0 0px 0px 4px rgb(204 214 210);
  vertical-align: bottom;
  transition: all 0.2s ease-out 0s;
  background: #fff;
  border-radius: 3px;
}
.contaner-div:hover {
  box-shadow: 0 0px 0px 4px #be8436;
}

.contaner-div-active {
  box-shadow: 0 0px 0px 4px #3bca36;
}

.hedaer-div {
  background: rgb(35, 137, 204);
  height: 10px;
}
.side-div {
  background: rgb(33, 33, 41);
  width: 10px;
  height: 40px;
  float: left;
}
.content-div {
  background: rgba(238, 232, 232, 0.952);
  width: 50px;
  height: 40px;
  float: left;
}
.foot-div {
  background: rgb(114, 122, 114);
  height: 10px;
}
</style>
