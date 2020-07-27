<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <span
      slot="title"
      :class="[menuInfo.isActive && 'router-link-active', menuInfo.isExactActive && 'router-link-exact-active']"
    >
      <a-icon v-if="menuInfo.icon" :type="menuInfo.icon" />
      <span>{{ menuInfo.title }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item
        v-if="!item.children || item.children.length<=0"
        :key="item.key"
        :class="[item.isActive && 'router-link-active', item.isExactActive && 'router-link-exact-active']"
      >
        <router-link :to="item.path">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import { Menu } from "ant-design-vue";
export default {
  name: "SubMenu",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    //属性不能重叠Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>