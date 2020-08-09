
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

// driver01.引入先手引导页依赖库 https://github.com/kamranahmedse/driver.js
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
// driver02.将配置引导页基础方法写入原型
Vue.prototype.$driver = new Driver({
  animate: true, // 当改变突出显示的元素时动画
  opacity: 0.75, // 背景不透明度(0表示只有弹出窗口，没有叠加)
  padding: 10, // 元素从边缘周围的距离
  allowClose: true, // 点击叠加是否应该关闭
  overlayClickNext: false, // 它应该移动到下一步覆盖点击
  stageBackground: '#ffffff', // 突出显示元素的背景颜色
  doneBtnText: '完成',
  closeBtnText: '关闭',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  onHighlightStarted: (Element) => { },//元素即将突出显示时调用
  onHighlighted: (Element) => { },//元素完全突出显示时调用
  onDeselected: (Element) => { },//取消选择元素时调用
  onReset: (Element) => { },//当要清除叠加时调用
  onNext: (Element) => { },//在任何步骤中移动到下一步时调用
  onPrevious: (Element) => { },//在任何步骤中移动到上一步时调用
})



//以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
new Vue({
  router,//默认表示 router:router
  store, //将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App),
  //手动挂载, 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
}).$mount('#app')

