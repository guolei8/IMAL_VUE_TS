import axios from 'axios'
import qs from 'qs';
import router from '@/router';
import { Message } from 'element-ui';

/*
  封装axios
*/
const service = axios.create({
  // 多环境多域名不设置baseURL
  timeout: 50000,
})
// 跳转到登录页
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

// 错误处理
const errorHandle = (status: number, other: string) => {
  switch (status) {
    case 401:
      toLogin()
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      Message.error('登录失效，请重新登录！');
      toLogin();
    default:
      break;
  }
}

service.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
service.defaults.paramsSerializer = (params) => qs.stringify(params, {
  indices: false,
});

// 请求拦截，携带token
service.interceptors.request.use((config) => {
  // 设置请求头Authorization，作为权限验证的标识
  // 也可以自定义其他的请求头
  // if (LoginModule.token) {
  //   config.headers.Authorization = LoginModule.token;
  // }
  return config;
}, (error) => {
  Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
    }
  }
);

export default service