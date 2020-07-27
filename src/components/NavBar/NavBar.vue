<template>
  <a-menu
    :style="navStyle"
    :default-selected-keys="defaultSelectedKeys"
    :mode="mode"
    :theme="theme"
    :collapsed="collapsed"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    @select="onSelect"
    @openChange="openChange"
  >
    <template v-for="item in menus">
      <a-menu-item
        v-if="!item.children || item.children.length<=0"
        :key="item.key"
        :class="[item.isActive && 'router-link-active', item.isExactActive && 'router-link-exact-active']"
      >
        <router-link :to="item.path">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-menu>
</template>
<script>
import SubMenu from "./SubMenu";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    "sub-menu": SubMenu,
  },
  name: "NavBar",
  data() {
    return {
      // 当前展开的 SubMenu 菜单项 key 数组
      openKeys: [],
      // 当前选中的菜单项 key 数组
      selectedKeys: [],
      cachedOpenKeys: [],
    };
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作
  mounted() {
    this.loadNav();
  },
  computed: {
    rootSubmenuKeys: (vm) => {
      debugger;
      const keys = [];
      vm.menus.forEach((item) => keys.push(item.path));
      return keys;
    },
  },
  watch: {
    // 监听路由变化
    "$route.path": function (newVal, oldVal) {
      const nav = this.getRouteByPath(this.navRoutes(), newVal, []);
      this.selectedKeys = [nav.key];
    },
  },
  methods: {
    ...mapActions(["addPane", "setActiveKey"]),
    ...mapGetters({ paneStore: "getPanes", navRoutes: "navRoutes" }),
    // select menu item
    openChange(openKeys) {
      debugger;
      // 在水平模式下时执行，并且不再执行后续
      if (this.mode === "horizontal") {
        this.openKeys = openKeys;
        return;
      }
      // 非水平模式时
      const latestOpenKey = openKeys.find(
        (key) => !this.openKeys.includes(key)
      );
      if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    // 菜单选中时调用
    onSelect({ item, key, selectedKeys }) {
      this.selectedKeys = selectedKeys;
      let nav = this.getRouteByKey(this.navRoutes(), selectedKeys[0], []);
      // 添加一个pane到vuex里面，如果存在则不添加，则选中
      this.addPane({
        key: nav.path,
        title: nav.title,
      });
    },
    getRouteByKey(navs, key) {
      for (let i = 0; i < navs.length; i++) {
        if (navs[i].key === key) {
          return navs[i];
        }
        if (navs[i].children && navs[i].children.length > 0) {
          let nav = this.getRouteByKey(navs[i].children, key);
          if (nav) {
            return nav;
          }
        }
      }
    },
    getRouteByPath(navs, path) {
      for (let i = 0; i < navs.length; i++) {
        if (navs[i].path === path) {
          return navs[i];
        }
        if (navs[i].children && navs[i].children.length > 0) {
          let nav = this.getRouteByPath(navs[i].children, path);
          if (nav) {
            return nav;
          }
        }
      }
    },
    loadNav() {
      debugger;
      this.selectedKeys = [this.$route.meta.key];
      const openKeys = [];
      if (this.mode === "inline") {
        const routes = this.$route.matched.concat();
        routes.forEach((item) => {
          if (item.meta.key != undefined) {
            openKeys.push(item.meta.key);
          }
        });
      }
      //设置当前选中的pane
      this.setActiveKey(this.$route.path);
      this.collapsed
        ? (this.cachedOpenKeys = openKeys)
        : (this.openKeys = openKeys);
    },
  },
  created() {},
  props: {
    navStyle: {
      type: Object,
      required: false,
    },
    defaultSelectedKeys: {
      type: Array,
      required: false,
      default: [],
    },
    mode: {
      type: String,
      required: false,
      default: "horizontal",
    },
    theme: {
      type: String,
      required: false,
      default: "dark",
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="less" scoped>
</style>

 