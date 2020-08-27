<template>
  <a-layout-header class="header">
    <a-row>
      <!--logo，当上中下结构的时候显示-->
      <a-col :span="col_1_span" v-if="displayLogo && layout!='3'">
        <!--logo-->
        <div class="header_Logo">
          <a href="/" class="router-link-active">
            <img class="logo" src="@/images/logo.png" />
            <a>
              <h1 class="logo-title">Duling ADMIN</h1>
            </a>
          </a>
        </div>
      </a-col>

      <a-col :span="col_2_span">
        <!-- 当布局是上中下的时候，side存在的时候才会出现-->
        <span
          style="margin-right:10px"
          v-if="layout!='0'"
          :class="headerTheme=== 'light' ? 'trigger' : 'trigger theme-color'"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="displaySideMenuClick" />
        </span>

        <!-- 当水平布局的时候 side菜单显示到这里-->
        <nav-bar
          v-if="layout==='0'"
          :navStyle="{'scrollbar-track-color':'#f629b9',lineHeight: '64px',height:'64px'}"
          :default-selected-keys="['home']"
          :mode="menuMode"
          :theme="headerTheme"
          :menus="menus"
        ></nav-bar>

        <!--垂直布局的时候，顶部快捷菜单-->
        <a-menu
          v-if="layout!='0'"
          :theme="headerTheme"
          mode="horizontal"
          :style="{ 'line-height':'64px', 'display': 'inline-block'}"
        >
          <a-menu-item key="2">基础设施</a-menu-item>
          <a-menu-item key="3">站点1</a-menu-item>
          <a-menu-item key="4">商场2</a-menu-item>
          <a-menu-item key="5">其他管理</a-menu-item>
        </a-menu>
      </a-col>

      <a-col :span="col_3_span">
        <!--顶部右侧工具-->
        <div class="header-tool-right">
          <!-- 面包导航 -->
          <span class="tool" v-if="layout!='0'">
            <a-breadcrumb :routes="routes">
              <template slot="itemRender" slot-scope="{route, routes, paths }">
                <a-icon :type="route.icon" v-if="route.icon" />
                <span v-if="routes.indexOf(route) != routes.length - 1">{{ route.name }}</span>
                <router-link v-else :to="`${paths.join('/')}`">{{ route.name }}</router-link>
              </template>
            </a-breadcrumb>
          </span>

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
              <template slot="title">
                <a href="https://github.com/duzhenyi/duling-vue" target="_blank">Git地址</a>
              </template>
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
                <a-menu-item key="3" @click="logoOut">
                  <a-icon :style="{ fontSize: '16px'}" type="logout" />退出系统
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script>
import ThemeBar from "_c/ThemeBar";
import ScreenfullBar from "_c/ScreenfullBar";
import Bus from "../bus";
import NavBar from "_c/NavBar";
import { mapActions } from "vuex";
export default {
  components: {
    ScreenfullBar,
    ThemeBar,
    NavBar,
  },
  data() {
    return {
      routes: [
        {
          path: "",
          icon: "home",
          name: "Home",
        },
        {
          path: "/user",
          icon: "user",
          name: "User",
        },
      ],
      collapsed: false,
      visible: false,
      col_1_span: 3,
      col_2_span: 10,
      col_3_span: 11,
    };
  },
  created() {
    if (this.layout != "3") {
      this.col_1_span = 3;
      this.col_2_span = 10;
      this.col_3_span = 11;
    } else if (this.layout === "3") {
      this.col_2_span = 10;
      this.col_3_span = 14;
    }
    //主题配置页关闭的时候传值过来
    Bus.$on("showThemeDrawer", (val) => {
      this.visible = val;
    });
  },
  methods: {
    ...mapActions(["loginOut"]),
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
    },
    //退出系统
    logoOut() {
      let that = this;
      this.loginOut()
        .then((res) => {
          that.$router.push({ path: "/login" }).catch((error) => {});
        })
        .catch((err) => {})
        .finally(() => {});
    },
  },
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
    //菜单类型，现在支持垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inlin
    menuMode: {
      type: String,
      required: false,
    },
    //主题颜色 string: light dark
    headerTheme: {
      type: String,
      required: false,
    },
    // 菜单
    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  background: "#ffff";
  padding: 0;
  .header_Logo {
    height: 31px;
    margin: 0px 16px 16px 16px;
  }
}
.headerFixed {
  position: "fixed";
  z-index: 1;
  width: "100%";
}

//头部右侧工具栏
.ant-breadcrumb {
  color: #ffff;
}

.ant-breadcrumb /deep/ span:last-child a {
  color: #ffff;
}
.ant-breadcrumb /deep/ span:last-child a:hover {
  color: #40a9ff;
}
.ant-breadcrumb /deep/ span:last-child {
  color: #ffff;
}

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
      color: #ffff;
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