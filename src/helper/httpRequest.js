import axios from "axios";
import store from "@/store";
import router from "@/router";
import { AccessToken } from "@/global/models";
// import notification from 'ant-design-vue/es/notification'
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: '30',
    headers: {
        "Content-Type": 'json',
    },
});

const error = (error) => {
    if (error.response) {
        const data = error.response.data
        const token = store.getters[AccessToken]
        if (error.response.status === 403) {
            notification.error({
                message: 'Forbidden',
                description: data.message
            })
        }
        if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
            notification.error({
                message: 'Unauthorized',
                description: 'Authorization verification failed'
            })
            if (token) {
                store.dispatch('Logout').then(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                })
            }
        }
    }
    return Promise.reject(error)
}
/**
 * http request 
 */
service.interceptors.request.use((config) => {
    if (store.getters[AccessToken]) {
        config.headers['Authorization'] = store.getters[AccessToken];
    }

    return config;
}, error)


/**
 *  http response 
 */
service.interceptors.response.use((response) => {
    const { status, data, config } = response;
    const { code, msg } = data;
    if (code !== 200) {
        switch (code) {
            case invalidCode:
                errorMsg(msg || `后端接口${code}异常`);
                store.dispatch("user/resetAccessToken");
                break;
            case noPermissionCode:
                router.push({
                    path: "/401",
                });
                break;
            default:
                errorMsg(msg || `后端接口${code}异常`);
                break;
        }
        return Promise.reject("请求异常拦截:" +JSON.stringify({ url: config.url, code, msg }) || "Error");
    } else {
        return data;
    }
}, error)

export default service;