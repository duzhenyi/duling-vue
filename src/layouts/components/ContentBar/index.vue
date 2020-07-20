<template>
  <a-layout-content :style="{ margin: '10px 10px 0' }">
    <!-- 多标签页 -->
    <a-tabs v-if="openMultipleTabs" v-model="activeKey" type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        <!-- 面包导航 -->
        <a-breadcrumb
          style="margin: 10px 0;vertical-align:middle;display: inline-block;"
          v-show="showGlobalBreadcrumbNavigation"
        >
          <a-breadcrumb-item>
            <a-icon v-show="globalBreadcrumbDisplayIcon" type="home" />Home
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a-icon v-show="globalBreadcrumbDisplayIcon" type="idcard" />List
          </a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>

        <router-view :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"></router-view>
      </a-tab-pane>
    </a-tabs>
  </a-layout-content>
</template>
<script>
export default {
  data() {
    return {
      panes: [
        // closable :false 禁止关闭
        {
          title: "首页1",
          content: "Content of Tab 1",
          key: "1",
          closable: false
        },
        { title: "首页2", content: "Content of Tab 1", key: "2" },
        { title: "首页3", content: "Content of Tab 2", key: "3" }
      ],
      activeKey: "1",
      newTabIndex: 0
    };
  },
  methods: {
    onEdit(targetKey, action) {
      this[action](targetKey);
    }
  },
  created() {
    console.log("this.openMultipleTabs:");
    console.log(this.openMultipleTabs);
  },
  props: {
    // 多标签页
    openMultipleTabs: {
      type: Boolean,
      required: false,
      default: false
    },
    // 显示全局面包屑导航
    showGlobalBreadcrumbNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    // 显示全局面包屑导航图标
    globalBreadcrumbDisplayIcon: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>