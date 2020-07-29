<template>
  <a-layout-content :style="{ margin: '5px 5px 0' }">
    <!-- 多标签页 -->
    <a-tabs
      v-if="openMultipleTabs"
      v-model="activeKey"
      :hideAdd="true"
      type="editable-card"
      @edit="onEdit"
      @change="tabChange"
    >
      <a-tab-pane
        :forceRender="false"
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
      >
        <!-- 面包导航 -->
        <a-breadcrumb v-show="showGlobalBreadcrumbNavigation">
          <a-breadcrumb-item>
            <a-icon v-show="globalBreadcrumbDisplayIcon" type="home" />Home
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a-icon v-show="globalBreadcrumbDisplayIcon" type="idcard" />List
          </a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
      </a-tab-pane>

      <!--右侧按钮组-->
      <a-dropdown slot="tabBarExtraContent">
        <a
          class="ant-dropdown-link"
          style="color: #606266; font-size:12px;cursor: pointer; "
          @click="e => e.preventDefault()"
        >
          更多操作
          <a-icon type="down" style=" padding-right: 10px;" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="1" style="color: #606266; font-size:12px;cursor: pointer;  ">
            <a-icon type="close-circle" />关闭其他
          </a-menu-item>
          <a-menu-item key="2" style="color: #606266; font-size:12px;cursor: pointer; ">
            <a-icon type="arrow-left" />关闭左侧
          </a-menu-item>
          <a-menu-item key="3" style="color: #606266; font-size:12px;cursor: pointer; ">
            <a-icon type="arrow-right" />关闭右侧
          </a-menu-item>
          <a-menu-item key="4" style="color: #606266; font-size:12px;cursor: pointer; ">
            <a-icon type="stop" />关闭全部
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-tabs>

    <!--将需要缓存的视图用keep-alive包裹-->
    <keep-alive :include="routeStore" :max="10">
      <router-view
        :key="routeKey"
        :style="{ color:'black', padding:'10px', background: '#fff', minHeight: '360px' }"
      ></router-view>
    </keep-alive>
  </a-layout-content>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // 当前选中的tab页
      activeKey: "",
      panes: [],
    };
  },
  watch: {
    // 监听路由变化
    "$route.path": function (newVal, oldVal) {
      this.activeKey = newVal;
    },
  },
  computed: {
    ...mapGetters({
      routeStore: "cachedRoutes",
      paneStore: "getPanes",
      paneActiveKey: "getActiveKey",
    }),
    routeKey() {
      // 绑定当前页面的路由地址
      return this.$route.path;
    },
  },
  created() {
    console.log("this.openMultipleTabs:");
    console.log(this.openMultipleTabs);
    
    this.activeKey = this.paneActiveKey;
    this.panes = this.paneStore;
  },
  methods: {
    ...mapActions(["setActiveKey", "delPane"]),
    tabChange(key) {
      this.setActiveKey(key);
      // tab页签切换后跳转路径
      this.$router.push({ path: key }).catch((error) => {});
    },
    onEdit(targetKey, action) {
      // 删除tab页签
      this[action](targetKey);
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const otherPanes = this.panes.filter((pane) => pane.key !== targetKey);
      if (otherPanes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = otherPanes[lastIndex].key;
          this.setActiveKey(otherPanes[lastIndex].key);
        } else {
          activeKey = otherPanes[0].key;
          this.setActiveKey(otherPanes[0].key);
        }
      }
      const delPane = this.panes.filter((pane) => pane.key === targetKey);
      this.delPane(delPane[0]);
      this.panes = this.paneStore;
      this.activeKey = this.paneActiveKey;
      this.$router.push({ path: activeKey }).catch((error) => {});
    },
  },
  props: {
    // 多标签页
    openMultipleTabs: {
      type: Boolean,
      required: false,
      default: false,
    },
    // 显示全局面包屑导航
    showGlobalBreadcrumbNavigation: {
      type: Boolean,
      required: false,
      default: false,
    },
    // 显示全局面包屑导航图标
    globalBreadcrumbDisplayIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="less" scope>
/* 导航面包背景颜色 下面2种都可以 */
.ant-layout-content .ant-breadcrumb {
  background: #ffff !important;
  padding: 10px !important;
}

/* tabs字体 */
.ant-tabs-nav-container {
  font-size: 12px !important;
}
/* tabs高度 */
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
  height: 30px !important;
}
.ant-tabs.ant-tabs-card .ant-tabs-extra-content {
  line-height: 30px !important;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  height: 30px !important;
  margin-right: 2px !important;
  line-height: 30px !important;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
  height: 30px !important;
  margin-right: 2px !important;
  line-height: 30px !important;
  background: #42b983 !important;
  color: #ffff !important;
}
/*tabs 图标 */
.ant-tabs.ant-tabs-card
  .ant-tabs-card-bar
  .ant-tabs-tab
  .ant-tabs-close-x:hover {
  color: #ffff !important;
  background: silver !important;
  border-radius: 50%;
  text-align: center;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
}
</style>