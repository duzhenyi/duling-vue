
/**
 * ../ 上一级目录
 * /   项目根目录
 * ./ 当前同一级目录
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components/AntDesignCore/AntDesignCompents' 
import "./router/permission"
import '../mock/index.js'

// import echarts  from 'echarts'
// Vue.prototype.$echarts = echarts;

// 全局状态管理器
import store from "@/store"

//以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  router,//默认表示 router:router
  store, //将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App),
  //手动挂载, 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
}).$mount('#app')

