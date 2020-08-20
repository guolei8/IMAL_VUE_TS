import request from '@/utils/request';

const { VUE_APP_API_IMAL, } = process.env;

export interface ILogin {
  username: string;
  password: string;
}

// 登录
export const login = (data: ILogin): Promise<object> => {
  return request({
    url: `${VUE_APP_API_IMAL}login`,
    method: 'post',
    data,
  });
};