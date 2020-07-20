//import { MainLayout } from "@/layouts" //文件夹下面必须把MainLayout.vue页面导出，查看layouts/index.js
//import MainLayout from "../layouts/MainLayout.vue";
import MainLayout from "@/layouts/MainLayout"

// 路由白名单
const routerWhites =  ["/login", "/register", "/404", "/401"]

// 基础路由
const routes =
    [
        {
            path: "/",//浏览器的地址
            name: "Root",
            component: MainLayout,//是路径所对应的组件
            redirect: '/home1',
            children: [
                {
                    path: "/home1",
                    name: "Home1",
                    component: () => import('@/views/home/home1'),
                    meta: {
                        title: "首页1",
                        icon: "home",
                        affix: true,
                    },
                },
                {
                    path: "/home2",
                    name: "Home2",
                    component: () => import('@/views/home/home2'),
                    meta: {
                        title: "首页2",
                        icon: "home",
                        affix: true,
                    },
                },
                {
                    path: "/home3",
                    name: "Home3",
                    component: () => import('@/views/home/home3'),
                    meta: {
                        title: "首页3",
                        icon: "home",
                        affix: true,
                    },
                },
            ],
        },
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

export {
    routerWhites,
    routes
}