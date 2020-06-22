import appconfig from "@/config/appconfig"
const cacheTheme = JSON.parse(localStorage.getItem("Duling-VUE-THEME")) || "";

const apptheme = {
    state: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        layout: cacheTheme.layout || appconfig.layout,
        // 菜单主题颜色 light dark
        menuTheme: cacheTheme.menuTheme || appconfig.menuTheme,
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: cacheTheme.menuMode || appconfig.momenuModede,
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
    getters: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        layout: (state) => state.layout,
        // 菜单主题颜色 light dark
        menuTheme: (state) => state.menuTheme,
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
    mutations: {
        //// 横纵布局 水平布局：horizontal 垂直布局：vertical 
        changeLayout: (state, layout) => {
            if (layout) state.layout = layout;
        },
        // 菜单主题颜色 light dark
        changeMenuTheme: (state, menuTheme) => {
            if (menuTheme) state.menuTheme = menuTheme;
        },
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        changeMenuMode: (state, menuMode) => {
            if (menuMode) state.menuMode = menuMode;
        },
        // 是否显示logo
        changeDisplayLogo: (state, displayLogo) => {
            if (displayLogo) state.displayLogo = displayLogo;
        },
        // 固定顶栏
        changeFixedHeaderBar: (state, fixedHeaderBar) => {
            if (fixedHeaderBar) state.fixedHeaderBar = fixedHeaderBar;
        },
        // 置顶顶栏 -需开启固定顶栏
        changeTopBar: (state, topBar) => {
            if (topBar) state.topBar = topBar;
        },
        // 下滑时隐藏顶栏 -需开启固定顶栏
        changeHideTopBarWhenSliding: (state, hideTopBarWhenSliding) => {
            if (hideTopBarWhenSliding) state.hideTopBarWhenSliding = hideTopBarWhenSliding;
        },
        // 固定侧边栏
        changeFixedSideBar: (state, fixedSideBar) => {
            if (fixedSideBar) state.fixedSideBar = fixedSideBar;
        },
        // 侧边栏展示到左侧
        changeFixedSideBarToLeft: (state, fixedSideBarToLeft) => {
            if (fixedSideBarToLeft) state.fixedSideBarToLeft = fixedSideBarToLeft;
        },
        // 侧边栏开启手风琴模式
        changeSidebarOpensAccordionMode: (state, sidebarOpensAccordionMode) => {
            if (sidebarOpensAccordionMode) state.sidebarOpensAccordionMode = sidebarOpensAccordionMode;
        },
        // 显示折叠侧边栏按钮
        changeShowCollapseSidebarButton: (state, showCollapseSidebarButton) => {
            if (showCollapseSidebarButton) state.showCollapseSidebarButton = showCollapseSidebarButton;
        },
        // 显示全局面包屑导航 -顶部菜单开启时无效
        changeShowGlobalBreadcrumbNavigation: (state, showGlobalBreadcrumbNavigation) => {
            if (showGlobalBreadcrumbNavigation) state.showGlobalBreadcrumbNavigation = showGlobalBreadcrumbNavigation;
        },
        // 全局面包屑显示图标 -需开启全局面包屑导航
        changeGlobalBreadcrumbDisplayIcon: (state, globalBreadcrumbDisplayIcon) => {
            if (globalBreadcrumbDisplayIcon) state.globalBreadcrumbDisplayIcon = globalBreadcrumbDisplayIcon;
        },
        // 显示重载页面按钮
        changeShowReloadPageButton: (state, showReloadPageButton) => {
            if (showReloadPageButton) state.showReloadPageButton = showReloadPageButton;
        },
        // 开启多页签
        changeOpenMultipleTabs: (state, openMultipleTabs) => {
            if (openMultipleTabs) state.openMultipleTabs = openMultipleTabs;
        },
        // 显示多语言选择
        changeShowMultilingualSelection: (state, showMultilingualSelection) => {
            if (showMultilingualSelection) state.showMultilingualSelection = showMultilingualSelection;
        },
    },
    actions: {

        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        changeLayout({ commit }, layout) {
            commit("changeLayout", layout);
        },
        // 菜单主题颜色 light dark
        changeMenuTheme({ commit }, menuTheme) {
            commit("changeMenuTheme", menuTheme);
        },
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        changeMenuMode({ commit }, menuMode) {
            commit("changeMenuMode", menuMode);
        },
        // 是否显示logo
        changeDisplayLogo({ commit }, displayLogo) {
            commit("changeDisplayLogo", displayLogo);
        },
        // 固定顶栏
        changeFixedHeaderBar({ commit }, fixedHeaderBar) {
            commit("changeFixedHeaderBar", fixedHeaderBar);
        },
        // 置顶顶栏 -需开启固定顶栏
        changeTopBar({ commit }, topBar) {
            commit("changeTopBar", topBar);
        },
        // 下滑时隐藏顶栏 -需开启固定顶栏
        changeHideTopBarWhenSliding({ commit }, hideTopBarWhenSliding) {
            commit("changeHideTopBarWhenSliding", hideTopBarWhenSliding);
        },
        // 固定侧边栏
        changeFixedSideBar({ commit }, fixedSideBar) {
            commit("changeFixedSideBar", fixedSideBar);
        },
        // 侧边栏展示到左侧
        changeFixedSideBarToLeft({ commit }, fixedSideBarToLeft) {
            commit("changeFixedSideBarToLeft", fixedSideBarToLeft);
        },
        // 侧边栏开启手风琴模式
        changeSidebarOpensAccordionMode({ commit }, sidebarOpensAccordionMode) {
            commit("changeSidebarOpensAccordionMode", sidebarOpensAccordionMode);
        },
        // 显示折叠侧边栏按钮
        changeShowCollapseSidebarButton({ commit }, showCollapseSidebarButton) {
            commit("changeShowCollapseSidebarButton", showCollapseSidebarButton);
        },
        // 显示全局面包屑导航 -顶部菜单开启时无效
        changeShowGlobalBreadcrumbNavigation({ commit }, showGlobalBreadcrumbNavigation) {
            commit("changeShowGlobalBreadcrumbNavigation", showGlobalBreadcrumbNavigation);
        },
        // 全局面包屑显示图标 -需开启全局面包屑导航
        changeGlobalBreadcrumbDisplayIcon({ commit }, globalBreadcrumbDisplayIcon) {
            commit("changeGlobalBreadcrumbDisplayIcon", globalBreadcrumbDisplayIcon);
        },
        // 显示重载页面按钮
        changeShowReloadPageButton({ commit }, showReloadPageButton) {
            commit("changeShowReloadPageButton", showReloadPageButton);
        },
        // 开启多页签
        changeOpenMultipleTabs({ commit }, openMultipleTabs) {
            commit("changeOpenMultipleTabs", openMultipleTabs);
        },
        // 显示多语言选择
        changeShowMultilingualSelection({ commit }, showMultilingualSelection) {
            commit("changeShowMultilingualSelection", showMultilingualSelection);
        },
    }
}
export default apptheme