//import { MainLayout } from "@/layouts" //文件夹下面必须把MainLayout.vue页面导出，查看layouts/index.js
//import MainLayout from "../layouts/MainLayout.vue";
import MainLayout from "@/layouts/MainLayout"

export const routes =
    // export default   001
    [
        {
            path: "/",//浏览器的地址
            name: "Root",
            component: MainLayout,//是路径所对应的组件
            redirect: '/workplace',
            children: [
                {
                    path: "/workplace",
                    name: "Workplace",
                    component: () => import('@/views/home/workplace'),
                    meta: {
                        title: "首页",
                        icon: "home",
                        affix: true,
                    },
                },
            ],
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