<template>
  <a-layout-header class="header">
    <a-row>
      <a-col :span="col_1_span" v-if="displayLogo && layout==='vertical'">
        <!--logo-->
        <div class="header_Logo">
          <a href="/" class="router-link-active">
            <img class="logo" src="@/images/logo.png" />
            <a v-if="!collapsible">
              <h1 class="logo-title">Duling ADMIN</h1>
            </a>
          </a>
        </div>
      </a-col>

      <a-col :span="col_2_span">
        <!-- 当布局是垂直布局vertical时side存在的时候才会出现-->
        <span
          style="margin-right:10px"
          v-if="layout==='horizontal'"
          :class="headerTheme=== 'light' ? 'trigger' : 'trigger theme-color'"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="displaySideMenuClick" />
        </span>

        <!-- 当水平布局的时候 side菜单显示到这里-->
        <a-menu
          v-if="layout==='vertical'"
          :default-selected-keys="['home']"
          mode="horizontal"
          :theme="headerTheme"
          :style="{ lineHeight: '64px' }"
        >
          <a-sub-menu key="home">
            <span slot="title">
              <a-icon type="home" />
              <span>首页</span>
            </span>
            <a-menu-item key="sub1-1">首页1</a-menu-item>
            <a-menu-item key="sub1-2">首页2</a-menu-item>
            <a-menu-item key="sub1-3">首页3</a-menu-item>
          </a-sub-menu>
          <!-- 
          <a-menu-item key="home">
            <a-icon type="home" />
            <span>首页</span>
          </a-menu-item>-->

          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" />
              <span>用户中心</span>
            </span>
            <a-menu-item key="sub1-1">普通会员</a-menu-item>
            <a-menu-item key="sub1-2">平台用户</a-menu-item>
            <a-menu-item key="sub1-3">小黑屋</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="shop" />
              <span>商品管理</span>
            </span>
            <a-menu-item key="sub2-1">已上架</a-menu-item>
            <a-menu-item key="sub2-2">待上架</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="appstore" />
              <span>订单管理</span>
            </span>
            <a-menu-item key="sub3-1">未支付订单</a-menu-item>
            <a-menu-item key="sub3-2">已支付订单</a-menu-item>
            <a-menu-item key="sub3-3">待发货订单</a-menu-item>
            <a-sub-menu key="sub3-4" title="待处理订单">
              <a-menu-item key="sub3-4-1">换货订单</a-menu-item>
              <a-menu-item key="sub3-4-2">退货订单</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>

          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="book" />
              <span>文章管理</span>
            </span>
            <a-menu-item key="sub4-1">技术散文</a-menu-item>
            <a-menu-item key="sub4-2">人生感悟</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub5">
            <span slot="title">
              <a-icon type="deployment-unit" />
              <span>站点管理</span>
            </span>
            <a-menu-item key="sub5-1">站点配置</a-menu-item>
            <a-menu-item key="sub5-2">友情链接</a-menu-item>
            <a-menu-item key="sub5-3">站点统计</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub6">
            <span slot="title">
              <a-icon type="reconciliation" />
              <span>功能管理</span>
            </span>
            <a-menu-item key="sub6-1">模块资源</a-menu-item>
            <a-menu-item key="sub6-2">菜单资源</a-menu-item>
            <a-menu-item key="sub6-3">API资源</a-menu-item>
            <a-menu-item key="sub6-4">操作按钮</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub7">
            <span slot="title">
              <a-icon type="crown" />
              <span>权限管理</span>
            </span>
            <a-menu-item key="sub7-1">功能菜单权限</a-menu-item>
            <a-menu-item key="sub7-2">字段属性权限</a-menu-item>
            <a-menu-item key="sub7-3">数据访问权限</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub8">
            <span slot="title">
              <a-icon type="bug" />
              <span>日志管理</span>
            </span>
            <a-menu-item key="sub8-1">登录日志</a-menu-item>
            <a-menu-item key="sub8-2">通信日志</a-menu-item>
            <a-menu-item key="sub8-3">操作日志</a-menu-item>
            <a-menu-item key="sub8-4">异常日志</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub10">
            <span slot="title">
              <a-icon type="area-chart" />
              <span>智能分析</span>
            </span>
            <a-menu-item key="sub10-1">访问统计</a-menu-item>
            <a-menu-item key="sub10-2">登录统计</a-menu-item>
            <a-menu-item key="sub10-3">注册统计</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub11">
            <span slot="title">
              <a-icon type="alert" />
              <span>评论管理</span>
            </span>
            <a-menu-item key="sub11-1">回收站评论</a-menu-item>
            <a-menu-item key="sub11-2">待审核评论</a-menu-item>
            <a-menu-item key="sub11-3">已审核评论</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub12">
            <span slot="title">
              <a-icon type="calendar" />
              <span>广告管理</span>
            </span>
            <a-menu-item key="sub12-1">广告位置</a-menu-item>
            <a-menu-item key="sub12-2">广告计划</a-menu-item>
            <a-menu-item key="sub12-3">过期广告</a-menu-item>
          </a-sub-menu>

          <a-menu-item key="sub13">
            <a-icon type="message" />
            <span>留言管理</span>
          </a-menu-item>

          <a-sub-menu key="sub14">
            <span slot="title">
              <a-icon type="mail" />
              <span>邮件管理</span>
            </span>
            <a-menu-item key="sub14-1">邮件模板</a-menu-item>
            <a-menu-item key="sub14-2">发送邮件</a-menu-item>
            <a-menu-item key="sub14-3">已发邮件</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub15">
            <span slot="title">
              <a-icon type="qq" />
              <span>QV群管理</span>
            </span>
            <a-menu-item key="sub15-1">QQ群</a-menu-item>
            <a-menu-item key="sub15-1">微信群</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub16">
            <span slot="title">
              <a-icon type="laptop" />
              <span>蜘蛛管理</span>
            </span>
            <a-menu-item key="sub16-1">蜘蛛配置</a-menu-item>
            <a-menu-item key="sub16-2">蜘蛛规则</a-menu-item>
            <a-menu-item key="sub16-3">黄雀网站</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub17">
            <span slot="title">
              <a-icon type="hourglass" />
              <span>定时任务</span>
            </span>
            <a-menu-item key="sub17-1">任务配置</a-menu-item>
            <a-menu-item key="sub17-2">执行中任务</a-menu-item>
            <a-menu-item key="sub17-3">待执行任务</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub18">
            <span slot="title">
              <a-icon type="file-text" />
              <span>基础管理</span>
            </span>
            <a-menu-item key="sub18-1">字典参数</a-menu-item>
            <a-menu-item key="sub18-2">存储设置</a-menu-item>
            <a-menu-item key="sub18-3">代码生成</a-menu-item>
            <a-menu-item key="sub18-4">数据库设置</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub19">
            <span slot="title">
              <a-icon type="setting" />
              <span>系统管理</span>
            </span>
            <a-menu-item key="sub19-1">系统设置</a-menu-item>
            <a-menu-item key="sub19-2">关键字过滤</a-menu-item>
            <a-menu-item key="sub19-3">IP限制</a-menu-item>
          </a-sub-menu>
        </a-menu>

        <!--垂直布局的时候，顶部快捷菜单-->
        <a-menu
          v-if="layout==='horizontal'"
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
                <a href target="_blank">Git地址</a>
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
import { mapActions } from "vuex";
export default {
  components: {
    ScreenfullBar,
    ThemeBar
  },
  data() {
    return {
      collapsed: false,
      visible: false,
      col_1_span: 4,
      col_2_span: 10,
      col_3_span: 10
    };
  },
  created() {
    if (this.layout === "vertical") {
      this.col_1_span = 3;
      this.col_2_span = 11;
      this.col_3_span = 10;
    } else {
      this.col_1_span = 0;
      this.col_2_span = 14;
      this.col_3_span = 10;
    }
    //主题配置页关闭的时候传值过来
    Bus.$on("showThemeDrawer", val => {
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
        .then(res => {
          that.$router.push({ path: "/login" }).catch(error => {});
        })
        .catch(err => {
        })
        .finally(() => {});
    }
  },
  props: {
    fixedSideBar: {
      type: Boolean,
      required: false,
      default: false
    },
    //菜单类型，现在支持垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inlin
    menuMode: {
      type: String,
      required: false,
      default: "horizontal"
    },
    //主题颜色 string: light dark
    headerTheme: {
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