import axios from "axios";
import { Message } from "element-ui";
import store from "@/store/index";
import router from "@/router/index";
import codeMsg from "@/utils/codeMsg";
import { getToken } from "@/utils/auth";

export const baseURL = "http://localhost:8081";

// 创建axios实例
const service = axios.create({
  baseURL, // api 的 base_url
  timeout: 10000, // 请求超时时间
  headers: {
    "Content-Type": "application/json"
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.url.indexOf("login") > -1) {
      delete config.headers.webMemberName;
      delete config.headers.Authorization;
    } else {
      config.headers.Authorization = getToken(); // 让每个请求携带自定义token
    }
    if (config.isUpload) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res && res.code !== 200) {
      Message({
        message: res.message,
        type: "error",
        duration: 3 * 1000
      });
      // 401: Unauthorized; 403: Forbidden;
      if (res.code === 403) {
        store.dispatch("Logout").then(() => {
          router.push("/");
        });
      }
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    console.log("err" + error); // for debug
    if (error && error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      error.message = codeMsg[error.response.status];
    } else if (error && error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      error.message = "未响应或请求超时";
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      error.message = "请求出错";
    }
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
