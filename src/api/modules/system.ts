import request from '@/utils/request';

const { VUE_APP_API_IMAl, } = process.env;

// 获取制品管理的基本信心
export const getInfo = (currentPage: number) => {
  return request({
    url: `${VUE_APP_API_IMAl}artifact/list/${currentPage}`,
    method: 'get',
  });
}