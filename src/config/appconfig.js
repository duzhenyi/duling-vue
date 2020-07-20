module.exports = {
  // token存储位置localStorage sessionStorage cookie
  Storage: "localStorage",
  // 横纵布局 水平布局：horizontal 垂直布局：vertical 
  layout: "horizontal",
  // 菜单颜色
  menuColor: '#FFFFFF',
  // 头部主题颜色 light dark
  headerTheme: "dark",
  // 侧边栏主题颜色 light dark
  sideTheme: "light",
  // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
  menuMode: "inline",
  // 是否显示logo
  displayLogo: true,
  // 固定顶栏
  fixedHeaderBar: false,
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
  showGlobalBreadcrumbNavigation: true,
  // 全局面包屑显示图标 -需开启全局面包屑导航
  globalBreadcrumbDisplayIcon: true,
  // 显示重载页面按钮
  showReloadPageButton: false,
  // 开启多页签
  openMultipleTabs: true,
  // 显示多语言选择
  showMultilingualSelection: true,
  primaryColor: '#1890ff', // 全局主色
  linkColor: '#1890ff', // 链接色
  successColor: '#52c41a', // 成功色
  warningColor: '#faad14', // 警告色
  errorColor: '#f5222d', // 错误色
  fontSizeBase: '14px', // 主字号
  headingColor: "rgba(0, 0, 0, 0.85)'pt-0'", // 标题色
  textColor: 'rgba(0, 0, 0, 0.65)', // 主文本色
  textColorSecondary: 'rgba(0, 0, 0, 0.45)', // 次文本色
  disabledColor: 'rgba(0, 0, 0, 0.25)', // 失效色
  borderRadiusBase: '4px', // 组件/浮层圆角
  borderColorBase: '#d9d9d9', // 边框色
  boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
};

