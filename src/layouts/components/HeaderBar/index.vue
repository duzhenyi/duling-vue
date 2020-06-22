<template>
  <a-layout-header class="header">
    <!--logo-->
    <div class="headerLogo" v-if="displayLogo && !fixedSideBar" />
    <!--顶部菜单-->
    <a-menu v-if="!fixedSideBar" :theme="theme" :mode="mode" :style="{ lineHeight: '64px' }">
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
      <a-menu-item key="4">nav 4</a-menu-item>
      <a-menu-item key="5">nav 5</a-menu-item>
    </a-menu>
    <!--当布局是垂直布局vertical时side存在的时候才会出现-->
    <span :class="theme=== 'light' ? 'trigger theme-color' : 'trigger'">
      <a-icon
        v-if="layout==='horizontal'"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="displaySideMenuClick"
      />
    </span>

    <!--顶部右侧工具-->
    <div class="header-tool-right">
      <!--搜索框-->
      <span class="tool">
        <input placeholder="🎉input search text" class="header-search" />
      </span>

      <!--全屏-->
      <span class="tool theme-color">
        <screenfull-bar></screenfull-bar>
      </span>

      <!--git地址-->
      <span class="tool theme-color">
        <a-tooltip placement="bottom">
          <template slot="title">git地址</template>
          <a-icon type="github" :style="{ fontSize: '18px' }" />
        </a-tooltip>
      </span>

      <!--通知-->
      <span class="tool theme-color">
        <a-popover placement="bottomRight" trigger="hover">
          <template slot="content">
            <a-tabs default-active-key="1">
              <a-tab-pane key="1" tab="通知">
                <a-list>
                  <a-list-item>
                    <a-list-item-meta description="annita.auer@example.com">
                      <a slot="title" href="item.href">Auer</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                    <strong>2020-06-19 19:02:59</strong>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta description="annita.auer@example.com">
                      <a slot="title" href="item.href">Auer</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                    <strong>2020-06-19 19:02:59</strong>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta description="annita.auer@example.com">
                      <a slot="title" href="item.href">Auer</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                    <strong>2020-06-19 19:02:59</strong>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta description="annita.auer@example.com">
                      <a slot="title" href="item.href">Auer</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                    <strong>2020-06-19 19:02:59</strong>
                  </a-list-item>
                </a-list>
              </a-tab-pane>
              <a-tab-pane key="2" tab="关注" force-render>
                <a-list>
                  <a-list-item>
                    <a-list-item-meta description="Progresser XTech">
                      <a slot="title" href="https://www.antdv.com/">Lily</a>
                      <a-avatar
                        slot="avatar"
                        src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                      />
                    </a-list-item-meta>
                    <a>View Profile</a>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta description="Progresser XTech">
                      <a slot="title" href="https://www.antdv.com/">Lily</a>
                      <a-avatar
                        slot="avatar"
                        src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                      />
                    </a-list-item-meta>
                    <a>View Profile</a>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta description="Progresser XTech">
                      <a slot="title" href="https://www.antdv.com/">Lily</a>
                      <a-avatar
                        slot="avatar"
                        src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                      />
                    </a-list-item-meta>
                    <a>View Profile</a>
                  </a-list-item>
                </a-list>
              </a-tab-pane>
            </a-tabs>
          </template>
          <a-badge count="5">
            <a-icon type="bell" :style="{ fontSize: '18px' }" />
          </a-badge>
        </a-popover>
      </span>

      <!--多语言-->
      <span class="tool theme-color">
        <a-popover placement="bottomRight" trigger="hover">
          <template slot="content">
            <a-list item-layout="horizontal">
              <a-list-item>
                <span>
                  <a-icon :style="{ fontSize: '16px' }" type="solution" />简体中文
                </span>
              </a-list-item>
              <a-list-item>
                <span class="active">
                  <a-icon :style="{ fontSize: '16px' }" type="setting" />Englich
                </span>
              </a-list-item>
            </a-list>
          </template>
          <a-icon type="global" :style="{ fontSize: '18px' }" />
        </a-popover>
      </span>

      <!--打开主题设置-->
      <span class="tool theme-color">
        <a-tooltip placement="bottomLeft">
          <template slot="title">主题设置</template>
          <a-icon @click="showThemeDrawerClick" type="dashboard" :style="{ fontSize: '18px' }" />
          <theme-bar></theme-bar>
        </a-tooltip>
      </span>

      <!--头像-->
      <span class="tool theme-color">
        <a-dropdown placement="bottomLeft">
          <!-- <a-avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />-->
          <div style="height:100%;width:100%;">
            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">D</a-avatar>
            <span>Admin</span>
            <a-icon type="caret-down" theme="filled" />
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a-icon :style="{ fontSize: '16px' }" type="solution" />个人中心
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <a-icon :style="{ fontSize: '16px' }" type="setting" />系统设置
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <a-icon :style="{ fontSize: '16px'}" type="logout" />退出系统
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </div>
  </a-layout-header>
</template>
<script>
import ThemeBar from "_c/ThemeBar";
import ScreenfullBar from "_c/ScreenfullBar";
import Bus from "../bus";
export default {
  components: {
    ScreenfullBar,
    ThemeBar
  },
  data() {
    return {
      collapsed: false,
      visible: false
    };
  },
  created() {
    //主题配置页关闭的时候传值过来
    Bus.$on("showThemeDrawer", val => {
      this.visible = val;
    });
  },
  methods: {
    displaySideMenuClick() {
      this.collapsed = !this.collapsed;
      //子组件向兄弟组件传值
      //displaySideMenu是父组件指定的传数据绑定的函数，this.collapsed:子组件给兄弟组件传递的数据
      Bus.$emit("displaySideMenu", this.collapsed);
    },
    // 显示隐藏主题设置
    showThemeDrawerClick() {
      this.visible = !this.visible;
      // 传值给主题配置页面
      Bus.$emit("showThemeDrawer", this.visible);
    }
  },
  props: {
    fixedSideBar: {
      type: Boolean,
      required: false,
      default: false
    },
    //菜单类型，现在支持垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inlin
    mode: {
      type: String,
      required: false,
      default: "horizontal"
    },
    //主题颜色 string: light dark
    theme: {
      type: String,
      required: false,
      default: "dark"
    },
    // 全局布局方式 horizontal,vertical
    layout: {
      type: String,
      required: false,
      default: "horizontal"
    },
    // 是否显示logo
    displayLogo: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background: "#fff";
  padding: 0;
}
.headerFixed {
  position: "fixed";
  z-index: 1;
  width: "100%";
}

//头部右侧工具栏
.header-tool-right {
  float: right;
  height: 100%;
  .tool {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);

    .header-search {
      outline: none;
      border: none;
      background: transparent;
      color: #fff;
    }

    .tool:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    .avatar {
      margin: 20px 8px 20px 0;
      color: #1890ff;
      background: hsla(0, 0%, 100%, 0.85);
      vertical-align: middle;
    }

    .icon {
      font-size: 16px;
      padding: 4px;
    }
  }
}
.ant-list-item {
  padding: 6px 0;
  cursor: pointer;
  .active {
    color: #1890ff;
  }
}
.ant-list-item:hover {
  color: #1890ff;
}
</style>