import Vue from 'vue'
import { AccessToken } from '@/global/models'
import { login, getInfo, logout } from '@/api/login'
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken
} from '@/helper/accessToken'

const userInfo = {
    //  存放状态 类似vue data属性
    state: {
        id: '',
        nickname: '',
        age: '',
        gender: '',
        phone: '',
        avatar: '',
        account: '',
        accessToken: '',
        roles: [],
    },
    // 操作state数据的方法的集合，比如对该数据的修改、增加、删除等等，参数一是当前VueX对象中的state，参数二是该方法在被调用时传递参数使用的
    mutations: {
        setUerInfo(state, payLoad) {
            state.id = payLoad.id
            state.nickname = payLoad.nickname
            state.age = payLoad.age
            state.gender = payLoad.gender
            state.phone = payLoad.phone
            state.account = payLoad.account
            state.roles = payLoad.roles
        },
        setAccessToken: (state, accessToken) => {
            if (accessToken) state.accessToken = accessToken
        }
    },
    // 异步操作
    actions: {
        /**
         * 登录，获取令牌
         * @param {} param0 
         */
        async login({ commit }, loginParams) {
            return new Promise((resolve, reject) => {
                login(loginParams).then(res => {
                    commit("setAccessToken", res.data.accessToken);
                    setAccessToken(res.data.accessToken);
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        /**
         *  * 调用getUserInfo方法以后，进入actions，
         * 然后通过commit调用setUserInfo，将res（用户信息）作为参数传入传入进去，并将相对应的属性值赋值给state，
         * @param {可以理解为它是整个Store的对象.类似于this.$store， 他里面包含了state，getter，mutations，actions} context 
         */
        async getUserInfo(context) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    context.commit('setUerInfo', res)
                    //相当于 this.$store.commit,第一个参数是方法名，第二个参数是要传入的数据
                    context.dispatch('getAccessToken')
                    //actions也可以调用自己的其他方法
                })
            })
        },

        /**b
         * 登出
         */
        async loginOut({ commit, state }) {
            return new Promise((resolve) => {
                logout(state.accessToken).then(() => {
                    removeAccessToken(AccessToken);
                    resolve()
                }).catch(() => {
                    resolve()
                }).finally(() => {
                    commit('setToken', '')
                    Vue.ls.remove(AccessToken)
                })
            })
        }
    }
}

export default userInfo