import Vue from "vue"
import Router from "vue-router"
import { routes } from "@/router/router.config" // @查看vue.config.js文件里面的配置指定到哪里
//import routes from "./router.config" 001
Vue.use(Router)

export default new Router({
    mode: 'history',
    // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/" 默认：/
    base: process.env.BASE_URL,
    // 页面跳转的时候希望页面滚动在哪个位置，默认设置到顶部，仅在history.pushState 的浏览器中可用
    scrollBehavior: () => ({ y: 0 }),
    //路由数组
    routes: routes
})