/**
 * ① 依赖state得到新的数据，用getters（跟computed一样，只读）
 * ② 修改state的属性值，就用mutations（同步操作）
 */
import appconfig from "@/config/appconfig"
const cacheTheme = JSON.parse(localStorage.getItem("Duling-VUE-THEME")) || "";
const apptheme = {
    // 需要在state中定义变量，类似于vue中的data，通过state来存放状态
    state: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        layout: cacheTheme.layout || appconfig.layout,
        // 头部主题颜色 light dark
        headerTheme: cacheTheme.headerTheme || appconfig.headerTheme,
        // 侧边栏主题颜色 light dark
        sideTheme: cacheTheme.sideTheme || appconfig.sideTheme,
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: cacheTheme.menuMode || appconfig.menuMode,
        // 是否显示logo
        displayLogo: cacheTheme.displayLogo || appconfig.displayLogo,
    },
    // 加工state成员给外界 getters相当于vue中的计算属性(跟computed一样，只读)，通过getters进一步处理，得到我们想要的值，而且允许传参，第一个参数就是state
    getters: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        layout(state) {
            return state.layout
        },
        // 头部主题颜色 light dark
        headerTheme: (state) => state.headerTheme,
        // 侧边栏主题颜色 light dark
        sideTheme: (state) => state.sideTheme,
        // 菜单类型 垂直、水平、和内嵌模式三种 string: vertical vertical-right horizontal inline
        menuMode: (state) => state.menuMode,
        // 是否显示logo
        displayLogo: (state) => state.displayLogo,
    },
    // 类似于vue中的methods，mutations需要通过commit来调用其里面的方法，它也可以传入参数，第一个参数是state，第二个参数是载荷（payLoad），也就是额外的参数
    mutations: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        setLayout: (state, layout) => {
            if (layout) state.layout = layout;
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
    },
    // action类似于mutation， action可以提交mutation，action也不要直接去操作state，而是去操作mutation
    // action包含异步操作，类似于axios请求，可以都放在action中写，action中的方法默认的就是异步，并且返回promise
    actions: {
        // 横纵布局 水平布局：horizontal 垂直布局：vertical 
        setLayout({ commit }, layout) {
            commit("setLayout", layout);
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
    }
}
export default apptheme