// 使用 Mock
var Mock = require('mockjs')

// 定义返回的数据
const accessToken = {
    code: 200,
    msg: '',
    data: {
        accessToken: '123456token'
    }
}
const userInfo = {
    code: 200,
    msg: '',
    data: {
        id: '1',
        nickname: '张三',
        age: 18,
        gender: '男',
        phone: '15680505588',
        avatar: '',
        account: 'admin',
        roles: ['admin']
    }
}
const navRouters = {
    code: 200,
    msg: '',
    data: [
        {
            key: '1',
            title: '首页',
            name: 'Home',
            icon: 'home',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/home1',
            target: '',
            children: [
                { key: '1_1', title: '首页1', name: 'Home1', path: '/home1', component: 'home/home1', target: '', children: [] },
                { key: '1_2', title: '首页2', name: 'Home2', path: '/home2', component: 'home/home2', target: '', children: [] },
            ]
        }, 
        {
            key: 'd_2',
            title: '引导页',
            name: 'Driver',
            icon: 'bold',
            path: '/driver',
            component: 'driver/index',
            redirect: '',
            target: '',
            children: []
        },
        {
            key: 'd_3',
            title: '图标',
            name: 'Icon',
            icon: 'highlight',
            path: '',
            component: 'EmptyLayout',
            redirect: '/basic',
            target: '',
            children: [
                { key: 'd_4_1', title: '基础图标', name: 'Basic', path: '/basic', component: 'icon/basic', target: '', children: [] },
                { key: 'd_4_2', title: '彩色图标', name: 'Colorful', path: '/colorful', component: 'icon/colorful', target: '', children: [] },
                { key: 'd_4_3', title: '其他图标', name: 'Other', path: '/other', component: 'icon/other', target: '', children: [] },
            ]
        }, {
            key: 'd_4',
            title: '组件',
            name: 'Plugs',
            icon: 'gateway',
            path: '',
            component: 'EmptyLayout',
            redirect: '/editer',
            target: '',
            children: [
                { key: 'd_4_1', title: '富文本编辑器', name: 'Editer', path: '/editer', component: 'plugs/editer', target: '', children: [] },
                { key: 'd_4_2', title: 'Markdown', name: 'Markdown', path: '/markdown', component: 'plugs/markdown', target: '', children: [] },
                { key: 'd_4_3', title: 'JSON编辑器', name: 'JsonEdit', path: '/jsonEdit', component: 'plugs/jsonEdit', target: '', children: [] },
                { key: 'd_4_4', title: '图片上传', name: 'ImgUpload', path: '/imgUpload', component: 'plugs/imgUpload', target: '', children: [] },
                { key: 'd_4_5', title: '文件上传', name: 'FileUpload', path: '/fileUpload', component: 'plugs/fileUpload', target: '', children: [] },
                { key: 'd_4_6', title: '拖拽Dialog', name: 'DragDialog', path: '/DragDialog', component: 'plugs/dragDialog', target: '', children: [] },
                { key: 'd_4_7', title: '视频播放器', name: 'Video', path: '/video', component: 'plugs/video', target: '', children: [] },
                { key: 'd_4_8', title: '音频播放器', name: 'Music', path: '/music', component: 'plugs/music', target: '', children: [] },
                { key: 'd_4_9', title: '地图API', name: 'Map', path: '/map', component: 'plugs/map', target: '', children: [] },
                { key: 'd_4_10', title: '二维码', name: 'RCode', path: '/rcode', component: 'plugs/rcode', target: '', children: [] },
                { key: 'd_4_11', title: '放大镜', name: 'Glass', path: '/glass', component: 'plugs/glass', target: '', children: [] },
            ]
        },
        {
            key: 'd_5',
            title: '图表',
            name: 'Report',
            icon: 'ordered-list',
            path: '/report',
            component: 'report/index',
            redirect: '',
            target: '',
            children: []
        },{
            key: 'd_6',
            title: '表格',
            name: 'Table',
            icon: 'table',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/basic',
            target: '',
            children: [
                { key: 'd_6_1', title: '基础表格', name: 'Basic', path: '/basic1', component: 'table/basic', target: '', children: [] },
                { key: 'd_6_2', title: '动态表格', name: 'Dynamic', path: '/dynamic', component: 'table/dynamic', target: '', children: [] },
                { key: 'd_6_3', title: '其他表格', name: 'Other', path: '/other', component: 'table/other', target: '', children: [] },
            ]
        },
        {
            key: 'd_7',
            title: '表单',
            name: 'Form',
            icon: 'form',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/basic',
            target: '',
            children: [
                { key: 'd_7_1', title: '基础表单', name: 'Basic', path: '/basic', component: 'form/basic', target: '', children: [] },
                { key: 'd_7_2', title: '文章详情', name: 'Article', path: '/article', component: 'form/article', target: '', children: [] },
                { key: 'd_7_3', title: '商品详情', name: 'Product', path: '/product', component: 'form/product', target: '', children: [] },
                { key: 'd_7_4', title: '订单详情', name: 'Order', path: '/order', component: 'form/order', target: '', children: [] },
                { key: 'd_7_5', title: '表单生成器', name: 'Builder', path: '/builder', component: 'form/builder', target: '', children: [] },
            ]
        },
        {
            key: 'd_8',
            title: '错误页面',
            name: 'Exception',
            icon: 'bell',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/401',
            target: '',
            children: [
                { key: 'd_8_1', title: '401', name: '401', path: '/401', component: 'exception/401', target: '', children: [] },
                { key: 'd_8_2', title: '404', name: '404', path: '/404', component: 'exception/404', target: '', children: [] },
            ]
        },{
            key: 'd_9',
            title: '多语言',
            name: 'Language',
            icon: 'global',
            path: '/language',
            component: 'language/index',
            redirect: '',
            target: '',
            children: []
        },
        {
            key: 'd_10',
            title: 'Office',
            name: 'Office',
            icon: 'container',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/excel1',
            target: '',
            children: [
                { key: 'd_10_1', title: '导出Excel', name: 'Excel1', path: '/excel1', component: 'office/excel1', target: '', children: [] },
                { key: 'd_10_2', title: '导出已选择项', name: 'Excel2', path: '/excel2', component: 'office/excel2', target: '', children: [] },
                { key: 'd_10_3', title: '导出多级表头', name: 'Excel3', path: '/excel3', component: 'office/excel3', target: '', children: [] },
                { key: 'd_10_4', title: '上传Excel', name: 'Excel4', path: '/excel4', component: 'office/excel4', target: '', children: [] },
                { key: 'd_10_5', title: '导出ZIP', name: 'ZIP1', path: '/zip1', component: 'office/zip1', target: '', children: [] },
                { key: 'd_10_6', title: '导出PDF', name: 'PDF1', path: '/pdf1', component: 'office/pdf1', target: '', children: [] },
            ]
        }, 
        {
            key: '2',
            title: '用户中心',
            name: 'User',
            icon: 'user',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/user1',
            target: '',
            children: [
                { key: '2_1', title: '普通会员', name: 'User1', path: '/user1', component: 'user/user1', target: '', children: [] },
                { key: '2_2', title: '平台用户', name: 'User2', path: '/user1', component: 'user/user2', target: '', children: [] },
                { key: '2_3', title: '小黑屋', name: 'User3', path: '/user1', component: 'user/user3', target: '', children: [] },
            ]
        }, {
            key: '3',
            title: '商品管理',
            name: 'Shop',
            icon: 'shop',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/shop1',
            target: '',
            children: [
                { key: '3_1', title: '已上架', name: 'Shop1', path: '/shop1', component: 'shop/shop1', target: '', children: [] },
                { key: '3_2', title: '待上架', name: 'Shop2', path: '/shop2', component: 'shop/shop2', target: '', children: [] },
            ]
        }, {
            key: '4',
            title: '订单管理',
            name: 'Order',
            icon: 'appstore',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/order1',
            target: '',
            children: [
                { key: '4_1', title: '未支付订单', name: 'Order1', path: '/order1', component: 'order/order1', target: '', children: [] },
                { key: '4_2', title: '已支付订单', name: 'Order2', path: '/order2', component: 'order/order2', target: '', children: [] },
                { key: '4_3', title: '待发货订单', name: 'Order3', path: '/order3', component: 'order/order3', target: '', children: [] },
                { key: '4_4', title: '待发货订单', name: 'Order4', path: '/order4', component: 'EmptyLayout', target: '', children: [
                    { key: '4_4_1', title: '换货订单', name: 'Order5', path: '/order5', component: 'order/order5', target: '', children: [] },
                    { key: '4_4_3', title: '退货订单', name: 'Order6', path: '/order6', component: 'order/order6', target: '', children: [] },
                ] },
            ]
        }, {
            key: '5',
            title: '文章管理',
            name: 'Book',
            icon: 'book',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/book1',
            target: '',
            children: [
                { key: '5_1', title: '技术散文', name: 'Book1', path: '/book1', component: 'book/book1', target: '', children: [] },
                { key: '5_2', title: '人生感悟', name: 'Book2', path: '/book2', component: 'book/book2', target: '', children: [] },
            ]
        }, {
            key: '6',
            title: '站点管理',
            name: 'Site',
            icon: 'deployment-unit',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/site1',
            target: '',
            children: [
                { key: '6_1', title: '站点配置', name: 'Site1', path: '/site1', component: 'site/site1', target: '', children: [] },
                { key: '6_2', title: '友情链接', name: 'Site2', path: '/site2', component: 'site/site2', target: '', children: [] },
                { key: '6_3', title: '站点统计', name: 'Site3', path: '/site3', component: 'site/site3', target: '', children: [] },
            ]
        }, {
            key: '7',
            title: '功能管理',
            name: 'Module',
            icon: 'reconciliation',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/module',
            target: '',
            children: [
                { key: '7_1', title: '模块资源', name: 'Module1', path: '/module1', component: 'module/module1', target: '', children: [] },
                { key: '7_2', title: '菜单资源', name: 'Module2', path: '/module2', component: 'module/module2', target: '', children: [] },
                { key: '7_3', title: 'API资源', name: 'Module3', path: '/module3', component: 'module/module3', target: '', children: [] },
                { key: '7_4', title: '操作按钮', name: 'Module4', path: '/module4', component: 'module/module4', target: '', children: [] },
            ]
        }, {
            key: '8',
            title: '权限管理',
            name: 'Permission',
            icon: 'crown',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/permission1',
            target: '',
            children: [
                { key: '8_1', title: '功能菜单权限', name: 'Permission1', path: '/permission1', component: 'permission/permission1', target: '', children: [] },
                { key: '8_2', title: '字段属性权限', name: 'Permission2', path: '/permission2', component: 'permission/permission2', target: '', children: [] },
                { key: '8_3', title: '数据访问权限', name: 'Permission3', path: '/permission3', component: 'permission/permission3', target: '', children: [] },
            ]
        }, {
            key: '9',
            title: '日志管理',
            name: 'Log',
            icon: 'bug',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/log1',
            target: '',
            children: [
                { key: '9_1', title: '登录日志', name: 'Log1', path: '/log1', component: 'log/log1', target: '', children: [] },
                { key: '9_2', title: '通信日志', name: 'Log2', path: '/log2', component: 'log/log2', target: '', children: [] },
                { key: '9_3', title: '操作日志', name: 'Log3', path: '/log3', component: 'log/log3', target: '', children: [] },
                { key: '9_4', title: '异常日志', name: 'Log4', path: '/log4', component: 'log/log4', target: '', children: [] },
            ]
        }, {
            key: '10',
            title: '智能分析',
            name: 'Report',
            icon: 'area-chart',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/report1',
            target: '',
            children: [
                { key: '10_1', title: '访问统计', name: 'Report1', path: '/report1', component: 'report/report1', target: '', children: [] },
                { key: '10_2', title: '登录统计', name: 'Report2', path: '/report2', component: 'report/report2', target: '', children: [] },
                { key: '10_3', title: '注册统计', name: 'Report3', path: '/report3', component: 'report/report3', target: '', children: [] },
            ]
        }, {
            key: '11',
            title: '评论管理',
            name: 'Comment',
            icon: 'alert',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/comment1',
            target: '',
            children: [
                { key: '11_1', title: '回收站评论', name: 'Comment1', path: '/comment1', component: 'comment/comment1', target: '', children: [] },
                { key: '11_2', title: '待审核评论', name: 'Comment2', path: '/comment2', component: 'comment/comment2', target: '', children: [] },
                { key: '11_3', title: '已审核评论', name: 'Comment3', path: '/comment3', component: 'comment/comment3', target: '', children: [] },
            ]
        }, {
            key: '12',
            title: '广告管理',
            name: 'Adv',
            icon: 'calendar',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/adv1',
            target: '',
            children: [
                { key: '12_1', title: '广告位置', name: 'Adv1', path: '/adv1', component: 'adv/adv1', target: '', children: [] },
                { key: '12_2', title: '广告计划', name: 'Adv2', path: '/adv2', component: 'adv/adv2', target: '', children: [] },
                { key: '12_3', title: '过期广告', name: 'Adv3', path: '/adv3', component: 'adv/adv3', target: '', children: [] },
            ]
        }, {
            key: '13',
            title: '留言管理',
            name: 'Message',
            icon: 'message',
            path: '/message',
            component: 'message/message1',
            redirect: '',
            target: '',
            children: []
        }, {
            key: '14',
            title: '邮件管理',
            name: 'Mail',
            icon: 'mail',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/mail1',
            target: '',
            children: [
                { key: '14_1', title: '邮件模板', name: 'Mail1', path: '/mail1', component: 'mail/mail1', target: '', children: [] },
                { key: '14_2', title: '发送邮件', name: 'Mail2', path: '/mail2', component: 'mail/mail2', target: '', children: [] },
                { key: '14_3', title: '已发邮件', name: 'Mail3', path: '/mail3', component: 'mail/mail3', target: '', children: [] },
            ]
        }, {
            key: '15',
            title: 'QV群管理',
            name: 'QV',
            icon: 'qq',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/qv1',
            target: '',
            children: [
                { key: '15_1', title: 'QQ群', name: 'QV1', path: '/qv1', component: 'qv/qv1', target: '', children: [] },
                { key: '15_2', title: '平台用户', name: 'QV2', path: '/qv2', component: 'qv/qv2', target: '', children: [] },
            ]
        }, {
            key: '16',
            title: '蜘蛛管理',
            name: 'Laptop',
            icon: 'laptop',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/laptop1',
            target: '',
            children: [
                { key: '16_1', title: '蜘蛛配置', name: 'Laptop1', path: '/laptop1', component: 'laptop/laptop1', target: '', children: [] },
                { key: '16_2', title: '蜘蛛规则', name: 'Laptop2', path: '/laptop2', component: 'laptop/laptop2', target: '', children: [] },
                { key: '16_3', title: '黄雀网站', name: 'Laptop3', path: '/laptop3', component: 'laptop/laptop3', target: '', children: [] },
            ]
        }, {
            key: '17',
            title: '定时任务',
            name: 'Task',
            icon: 'hourglass',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/task1',
            target: '',
            children: [
                { key: '17_1', title: '普通会员', name: 'Task1', path: '/task1', component: 'task/task1', target: '', children: [] },
                { key: '17_2', title: '平台用户', name: 'Task2', path: '/task2', component: 'task/task2', target: '', children: [] },
                { key: '17_3', title: '小黑屋', name: 'Task3', path: '/task3', component: 'task/task3', target: '', children: [] },
            ]
        }, {
            key: '18',
            title: '基础管理',
            name: 'Basics',
            icon: 'file-text',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/basics1',
            target: '',
            children: [
                { key: '18_1', title: '字典参数', name: 'Basics1', path: '/basics1', component: 'basics/basics1', target: '', children: [] },
                { key: '18_2', title: '存储设置', name: 'Basics2', path: '/basics2', component: 'task/basics2', target: '', children: [] },
                { key: '18_3', title: '数据库设置', name: 'Basics3', path: '/basics3', component: 'task/basics3', target: '', children: [] },
                { key: '18_3', title: '代码生成', name: 'Basics4', path: '/basics4', component: 'task/basics4', target: '', children: [] },
            ]
        }, {
            key: '19',
            title: '系统管理',
            name: 'System',
            icon: 'setting',
            path: '/',
            component: 'EmptyLayout',
            redirect: '/system1',
            target: '',
            children: [
                { key: '19_1', title: '系统设置', name: 'System1', path: '/system1', component: 'system/system1', target: '', children: [] },
                { key: '19_2', title: '关键字过滤', name: 'System2', path: '/system2', component: 'system/system2', target: '', children: [] },
                { key: '19_3', title: 'IP限制', name: 'System3', path: '/system3', component: 'system/system3', target: '', children: [] },
            ]
        }
    ]
}

//三个参数：第一个路径，第二个请求方式post/get，第三个回调，返回值
Mock.mock(/login/, 'post', () => {
    return accessToken
})

// 获取用户信息
Mock.mock(/getuserinfo/, 'post', () => {
    return userInfo
})
// 获取菜单列表
Mock.mock(/getNavRouters/, 'post', () => {
    return navRouters
})
