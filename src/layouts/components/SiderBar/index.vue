<template>
  <a-layout-sider v-model="collapsible" :trigger="null" collapsible>
    <!--logo-->
    <div class="sideLogo" v-if="displayLogo && fixedSideBar">
      <a href="/" class="router-link-active">
          <img class="logo" src="@/images/logo.png" />
          <a v-show="!collapsible" ><h1 class="logo-title">Duling ADMIN</h1></a>
      </a>
    </div>
    <!--左侧菜单-->
    <a-menu
      :style="{'scrollbar-track-color':'#f629b9','overflow-y': 'auto', height: 'calc(100vh - 64px)'}"
      :default-selected-keys="['home']"
      :mode="menuMode"
      :theme="sideTheme"
    >
      <a-menu-item key="home">
        <a-icon type="home" />
        <span>首页</span>
      </a-menu-item>

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
  </a-layout-sider>
</template>
<script>
import Bus from "../bus";
export default {
  data() {
    return {
      collapsible: false
    };
  },
  created() {
    //从兄弟组件传值过来
    Bus.$on("displaySideMenu", val => {
      this.collapsible = val;
    });
  },
  methods: {},
  props: {
    //左中右布局，固定左侧side
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
    sideTheme: {
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
<style scoped>

/*滚动条的宽度*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/

::-webkit-scrollbar-track {
  width: 6px;
  background-color: #0d1b20;
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
  background-color: #fff;
}
</style>