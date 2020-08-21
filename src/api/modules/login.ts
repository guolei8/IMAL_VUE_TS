import request from '@/utils/request';

const { VUE_APP_API_IMAl, } = process.env;

export interface ILogin {
  uname: string;
  upass: string;
}

// 登录
export const login = (data: ILogin): Promise<object> => {
  return request({
    url: `${VUE_APP_API_IMAl}user/login`,
    method: 'post',
    data,
  });
};

// 退出
export const logout = (): Promise<object> => {
  return request({
    url: `${VUE_APP_API_IMAl}/user/logout`,
    method: 'post',
  });
};