import httpRequest from "@/helper/httpRequest";
import { encryptedData } from "@/helper/encrypt";
const loginRSA = false
export async function login(data) {
    if (loginRSA) {
        data = await encryptedData(data);
    }
    return httpRequest({
        url: "/login",
        method: "post",
        data,
    });
}

export async function getInfo(data) {
    if (loginRSA) {
        data = await encryptedData(data);
    }
    return httpRequest({
        url: "/login",
        method: "post",
        data,
    });
}
export async function logout(data) {
    if (loginRSA) {
        data = await encryptedData(data);
    }
    return httpRequest({
        url: "/login",
        method: "post",
        data,
    });
}
