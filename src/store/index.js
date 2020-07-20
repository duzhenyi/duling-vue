/**
 * 全局状态管理器
 * 1. 管理config下面appconfig.js的全局主题配置
 * 2. 管理登录成功保存的Token信息
 * 3. 管理用户基本信息
 * 4. 管理用户功能权限&数据权限信息
 */
import Vue from 'vue'

// 有了vuex，我们不必在考虑组件之间的传值，直接就可以通过$store来获取不同的数据
import Vuex from 'vuex'
Vue.use(Vuex);

// 加载所有modules下的js文件
const files = require.context("./modules", false, /\.js$/);

const sotres = {};
files.keys().forEach((key) => {
    sotres[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

const store = new Vuex.Store({
    modules:sotres
});
export default store;