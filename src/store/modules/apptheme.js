/**
 * ① 依赖state得到新的数据，用getters（跟computed一样，只读）
 * ② 修改state的属性值，就用mutations（同步操作）
 */
import appconfig from "@/config/appconfig"
const cacheTheme = JSON.parse(localStorage.getItem("Duling-VUE-THEME")) || "";
// console.log('cacheTheme:', cacheTheme)
const apptheme = {
    // 需要在state中定义变量，类似于vue中的data，通过state来存放状态
    state: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        layout: cacheTheme.layout || appconfig.layout,
        // 菜单颜色
        menuColor: cacheTheme.menuColor || appconfig.menuColor,
        // 头部主题颜色 light dark
        headerTheme: cacheTheme.headerTheme || appconfig.headerTheme,
        // 侧边栏主题颜色 light dark
        sideTheme: cacheTheme.sideTheme || appconfig.sideTheme,
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: cacheTheme.menuMode || appconfig.menuMode,
        // 是否显示logo
        displayLogo: cacheTheme.displayLogo || appconfig.displayLogo,
        // 固定顶栏
        fixedHeaderBar: cacheTheme.fixedHeaderBar || appconfig.fixedHeaderBar,
        // 置顶顶栏 -需开启固定顶栏
        topBar: cacheTheme.topBar || appconfig.topBar,
        // 下滑时隐藏顶栏 -需开启固定顶栏
        hideTopBarWhenSliding: cacheTheme.hideTopBarWhenSliding || appconfig.hideTopBarWhenSliding,
        // 固定侧边栏
        fixedSideBar: cacheTheme.fixedSideBar || appconfig.fixedSideBar,
        // 侧边栏展示到左侧
        fixedSideBarToLeft: cacheTheme.fixedSideBarToLeft || appconfig.fixedSideBarToLeft,
        // 侧边栏开启手风琴模式
        sidebarOpensAccordionMode: cacheTheme.sidebarOpensAccordionMode || appconfig.sidebarOpensAccordionMode,
        // 显示折叠侧边栏按钮
        showCollapseSidebarButton: cacheTheme.showCollapseSidebarButton || appconfig.showCollapseSidebarButton,
        // 显示全局面包屑导航 -顶部菜单开启时无效
        showGlobalBreadcrumbNavigation: cacheTheme.showGlobalBreadcrumbNavigation || appconfig.showGlobalBreadcrumbNavigation,
        // 全局面包屑显示图标 -需开启全局面包屑导航
        globalBreadcrumbDisplayIcon: cacheTheme.globalBreadcrumbDisplayIcon || appconfig.globalBreadcrumbDisplayIcon,
        // 显示重载页面按钮
        showReloadPageButton: cacheTheme.showReloadPageButton || appconfig.showReloadPageButton,
        // 开启多页签
        openMultipleTabs: cacheTheme.openMultipleTabs || appconfig.openMultipleTabs,
        // 显示多语言选择
        showMultilingualSelection: cacheTheme.showMultilingualSelection || appconfig.showMultilingualSelection,
    },
    // 加工state成员给外界 getters相当于vue中的计算属性(跟computed一样，只读)，通过getters进一步处理，得到我们想要的值，而且允许传参，第一个参数就是state
    getters: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        layout(state) {
            //console.log(state)
            return state.layout
        },
        menuColor(state) {
            return state.menuColor
        },
        // 头部主题颜色 light dark
        headerTheme: (state) => state.headerTheme,
        // 侧边栏主题颜色 light dark
        sideTheme: (state) => state.sideTheme,
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: (state) => state.menuMode,
        // 是否显示logo
        displayLogo: (state) => state.displayLogo,
        // 固定顶栏
        fixedHeaderBar: (state) => state.fixedHeaderBar,
        // 置顶顶栏 -需开启固定顶栏
        topBar: (state) => state.topBar,
        // 下滑时隐藏顶栏 -需开启固定顶栏
        hideTopBarWhenSliding: (state) => state.hideTopBarWhenSliding,
        // 固定侧边栏
        fixedSideBar: (state) => state.fixedSideBar,
        // 侧边栏展示到左侧
        fixedSideBarToLeft: (state) => state.fixedSideBarToLeft,
        // 侧边栏开启手风琴模式
        sidebarOpensAccordionMode: (state) => state.sidebarOpensAccordionMode,
        // 显示折叠侧边栏按钮
        showCollapseSidebarButton: (state) => state.showCollapseSidebarButton,
        // 显示全局面包屑导航 -顶部菜单开启时无效
        showGlobalBreadcrumbNavigation: (state) => state.showGlobalBreadcrumbNavigation,
        // 全局面包屑显示图标 -需开启全局面包屑导航
        globalBreadcrumbDisplayIcon: (state) => state.globalBreadcrumbDisplayIcon,
        // 显示重载页面按钮
        showReloadPageButton: (state) => state.showReloadPageButton,
        // 开启多页签
        openMultipleTabs: (state) => state.openMultipleTabs,
        // 显示多语言选择
        showMultilingualSelection: (state) => state.showMultilingualSelection,
    },
    // 类似于vue中的methods，mutations需要通过commit来调用其里面的方法，它也可以传入参数，第一个参数是state，第二个参数是载荷（payLoad），也就是额外的参数
    mutations: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        setLayout: (state, layout) => {
            if (layout) state.layout = layout;
        },
        setMenuColor: (state, menuColor) => {
            if (menuColor) state.menuColor = menuColor;
        },
        // 头部主题颜色 light dark
        setHeaderTheme: (state, headerTheme) => {
            if (headerTheme) state.headerTheme = headerTheme;
        },
        // 侧边栏主题颜色 light dark
        setSideTheme: (state, sideTheme) => {
            if (sideTheme) state.sideTheme = sideTheme;
        },
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        setMenuMode: (state, menuMode) => {
            if (menuMode) state.menuMode = menuMode;
        },
        // 是否显示logo
        setDisplayLogo: (state, displayLogo) => {
            if (displayLogo) state.displayLogo = displayLogo;
        },
        // 固定顶栏
        setFixedHeaderBar: (state, fixedHeaderBar) => {
            if (fixedHeaderBar) state.fixedHeaderBar = fixedHeaderBar;
        },
        // 置顶顶栏 -需开启固定顶栏
        setTopBar: (state, topBar) => {
            if (topBar) state.topBar = topBar;
        },
        // 下滑时隐藏顶栏 -需开启固定顶栏
        setHideTopBarWhenSliding: (state, hideTopBarWhenSliding) => {
            if (hideTopBarWhenSliding) state.hideTopBarWhenSliding = hideTopBarWhenSliding;
        },
        // 固定侧边栏
        setFixedSideBar: (state, fixedSideBar) => {
            if (fixedSideBar) state.fixedSideBar = fixedSideBar;
        },
        // 侧边栏展示到左侧
        setFixedSideBarToLeft: (state, fixedSideBarToLeft) => {
            if (fixedSideBarToLeft) state.fixedSideBarToLeft = fixedSideBarToLeft;
        },
        // 侧边栏开启手风琴模式
        setSidebarOpensAccordionMode: (state, sidebarOpensAccordionMode) => {
            if (sidebarOpensAccordionMode) state.sidebarOpensAccordionMode = sidebarOpensAccordionMode;
        },
        // 显示折叠侧边栏按钮
        setShowCollapseSidebarButton: (state, showCollapseSidebarButton) => {
            if (showCollapseSidebarButton) state.showCollapseSidebarButton = showCollapseSidebarButton;
        },
        // 显示全局面包屑导航 -顶部菜单开启时无效
        setShowGlobalBreadcrumbNavigation: (state, showGlobalBreadcrumbNavigation) => {
            if (showGlobalBreadcrumbNavigation) state.showGlobalBreadcrumbNavigation = showGlobalBreadcrumbNavigation;
        },
        // 全局面包屑显示图标 -需开启全局面包屑导航
        setGlobalBreadcrumbDisplayIcon: (state, globalBreadcrumbDisplayIcon) => {
            if (globalBreadcrumbDisplayIcon) state.globalBreadcrumbDisplayIcon = globalBreadcrumbDisplayIcon;
        },
        // 显示重载页面按钮
        setShowReloadPageButton: (state, showReloadPageButton) => {
            if (showReloadPageButton) state.showReloadPageButton = showReloadPageButton;
        },
        // 开启多页签
        setOpenMultipleTabs: (state, openMultipleTabs) => {
            if (openMultipleTabs) state.openMultipleTabs = openMultipleTabs;
        },
        // 显示多语言选择
        setShowMultilingualSelection: (state, showMultilingualSelection) => {
            if (showMultilingualSelection) state.showMultilingualSelection = showMultilingualSelection;
        },
    },
    // action类似于mutation， action可以提交mutation，action也不要直接去操作state，而是去操作mutation
    // action包含异步操作，类似于axios请求，可以都放在action中写，action中的方法默认的就是异步，并且返回promise
    actions: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        setLayout({ commit }, layout) {
            commit("setLayout", layout);
        },
        setMenuColor({ commit }, menuColor) {
            commit("setMenuColor", menuColor);
        },
        // 头部主题颜色 light dark
        setHeaderTheme({ commit }, headerTheme) {
            commit("setHeaderTheme", headerTheme);
        },
        // 侧边栏主题颜色 light dark
        setSideTheme({ commit }, sideTheme) {
            commit("setSideTheme", sideTheme);
        },
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        setMenuMode({ commit }, menuMode) {
            commit("setMenuMode", menuMode);
        },
        // 是否显示logo
        setDisplayLogo({ commit }, displayLogo) {
            commit("setDisplayLogo", displayLogo);
        },
        // 固定顶栏
        setFixedHeaderBar({ commit }, fixedHeaderBar) {
            commit("setFixedHeaderBar", fixedHeaderBar);
        },
        // 置顶顶栏 -需开启固定顶栏
        setTopBar({ commit }, topBar) {
            commit("setTopBar", topBar);
        },
        // 下滑时隐藏顶栏 -需开启固定顶栏
        setHideTopBarWhenSliding({ commit }, hideTopBarWhenSliding) {
            commit("setHideTopBarWhenSliding", hideTopBarWhenSliding);
        },
        // 固定侧边栏
        setFixedSideBar({ commit }, fixedSideBar) {
            commit("setFixedSideBar", fixedSideBar);
        },
        // 侧边栏展示到左侧
        setFixedSideBarToLeft({ commit }, fixedSideBarToLeft) {
            commit("setFixedSideBarToLeft", fixedSideBarToLeft);
        },
        // 侧边栏开启手风琴模式
        setSidebarOpensAccordionMode({ commit }, sidebarOpensAccordionMode) {
            commit("setSidebarOpensAccordionMode", sidebarOpensAccordionMode);
        },
        // 显示折叠侧边栏按钮
        setShowCollapseSidebarButton({ commit }, showCollapseSidebarButton) {
            commit("setShowCollapseSidebarButton", showCollapseSidebarButton);
        },
        // 显示全局面包屑导航 -顶部菜单开启时无效
        setShowGlobalBreadcrumbNavigation({ commit }, showGlobalBreadcrumbNavigation) {
            commit("setShowGlobalBreadcrumbNavigation", showGlobalBreadcrumbNavigation);
        },
        // 全局面包屑显示图标 -需开启全局面包屑导航
        setGlobalBreadcrumbDisplayIcon({ commit }, globalBreadcrumbDisplayIcon) {
            commit("setGlobalBreadcrumbDisplayIcon", globalBreadcrumbDisplayIcon);
        },
        // 显示重载页面按钮
        setShowReloadPageButton({ commit }, showReloadPageButton) {
            commit("setShowReloadPageButton", showReloadPageButton);
        },
        // 开启多页签
        setOpenMultipleTabs({ commit }, openMultipleTabs) {
            commit("setOpenMultipleTabs", openMultipleTabs);
        },
        // 显示多语言选择
        setShowMultilingualSelection({ commit }, showMultilingualSelection) {
            commit("setShowMultilingualSelection", showMultilingualSelection);
        },
    }
}
export default apptheme