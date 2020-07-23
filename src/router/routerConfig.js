//import { MainLayout } from "@/layouts" //文件夹下面必须把MainLayout.vue页面导出，查看layouts/index.js
//import MainLayout from "../layouts/MainLayout.vue";
import MainLayout from "@/layouts/MainLayout"
import EmptyLayout from "@/layouts/EmptyLayout"
// 路由白名单
const routerWhites = ["/login", "/register", "/404", "/401"]

// 默认路由
const defaultRoutes =
    [
        {
            path: '/login',
            component: () => import('@/views/login'),
        },
        {
            path: '/401',
            component: () => import('@/views/exception/401')
        },
        {
            path: '/404',
            component: () => import('@/views/exception/404')
        },
        {
            path: '/500',
            component: () => import('@/views/exception/500')
        }
    ]

// 根基菜单
const rootRoutes =
{
    path: "/",//浏览器的地址
    name: "Root",
    component: MainLayout,//是路径所对应的组件
    redirect: '/home1',
    children: [],
}

export { defaultRoutes, routerWhites }


/**
 * 动态生成菜单
 * @param token
 * @returns {Promise<Router>}
 */
export const generatorDynamicRouter = (data) => {
    const routers = generator(data)
    rootRoutes.children = routers
    const allRouters = []
    allRouters.push(rootRoutes)
    return allRouters.concat(defaultRoutes)
}

/**
 * 从后台数据变成路由集合
 * @param {后台数据} data 
 * @param {父级路由} parentRoute 
 */
export const generator = (data, parentRoute) => {
    return data.map(item => {
        const router = {
            name: item.name,
            // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
            path: item.path || `${parentRoute && parentRoute.path || ''}/${item.key}`,
            // 该路由对应页面的组件 
            component: item.component === 'EmptyLayout' ? EmptyLayout : () => import(`@/views/${item.component}`),
            // meta: 页面标题, 菜单图标
            meta: {
                title: item.title,
                icon: item.icon || undefined,
                target: item.target
            }
        }
        // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
        if (!router.path.startsWith('http')) {
            router.path = router.path.replace('//', '/')
        }
        // 重定向
        item.redirect && (router.redirect = item.redirect)
        // 是否有子菜单，并递归处理
        if (item.children && item.children.length > 0) {
            router.children = generator(item.children, router)
        }
        return router
    })
}
