import { storage } from "@/config/appconfig";
import { AccessToken } from "@/global/models";
import cookie from "js-cookie";

/**
 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getAccessToken() {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.getItem(AccessToken);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.getItem(AccessToken);
    } else if ("cookie" === storage) {
      return cookie.get(AccessToken);
    } else {
      return localStorage.getItem(AccessToken);
    }
  } else {
    return localStorage.getItem(AccessToken);
  }
}

/**
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(accessToken) {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.setItem(AccessToken, accessToken);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.setItem(AccessToken, accessToken);
    } else if ("cookie" === storage) {
      return cookie.set(AccessToken, accessToken);
    } else {
      return localStorage.setItem(AccessToken, accessToken);
    }
  } else {
    return localStorage.setItem(AccessToken, accessToken);
  }
}

/**
 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
export function removeAccessToken() {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.removeItem(AccessToken);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.clear();
    } else if ("cookie" === storage) {
      return cookie.remove(AccessToken);
    } else {
      return localStorage.removeItem(AccessToken);
    }
  } else {
    return localStorage.removeItem(AccessToken);
  }
}
