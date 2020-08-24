
/**
 * ../ 上一级目录
 * /   项目根目录
 * ./ 当前同一级目录
 */

import Vue from 'vue'
import App from './App.vue'

// 引入路由管理依赖库
import router from './router'

// 引入ant design vue核心基础库
import './components/AntDesignCore/AntDesignCompents'

// 引入路由守卫
import "./router/permission"

// 全局状态管理器
import store from "@/store"

// 引入mock请求依赖库
import '../mock/index.js'
 
// 引入图标库
import "@/assets/iconfont/iconfont.js"

// 引入图表依赖库
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入复制到粘贴板依赖库
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)


//以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
new Vue({
  router,//默认表示 router:router
  store, //将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App),
  //手动挂载, 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
}).$mount('#app')

