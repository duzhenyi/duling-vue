import httpRequest from "@/helper/httpRequest";
import { encryptedData } from "@/helper/encrypt";
const loginRSA = false

export function login(params) {
    if (loginRSA) {
        params = encryptedData(params);
    }
    return httpRequest({
        url: "/login",
        method: "post",
        params
    });
}

export function getUserInfo() {
    if (loginRSA) {
        params = encryptedData();
    }
    return httpRequest({
        url: "/getuserinfo",
        method: "post"
    });
}
export function logout(params) {
    if (loginRSA) {
        params = encryptedData(params);
    }
    return httpRequest({
        url: "/logout",
        method: "post",
        params
    });
}

export function getNavRouters(params) {
    if (loginRSA) {
        params = encryptedData(params);
    }
    return httpRequest({
        url: "/getNavRouters",
        method: "post",
        params
    });
}
