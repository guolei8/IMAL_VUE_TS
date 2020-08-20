import store from '@/store/store';
import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';


interface IUserInfo {
  account: string | null;
  customerId: number | string;
  id: number | string;
  userName: string | null;
}

export interface IConfig {
  id: null | number;
  cid: null | number;
  platformList: string[];
  quotaMonitor: number | null;
}

interface IState {
  token: string | undefined;
  userInfo: IUserInfo;
  userConfig: IConfig;
}

const getDefaultUserInfo = (): IUserInfo => ({
  account: '',
  id: '',
  userName: '',
  customerId: '',
});

const getUserConfig = (): IConfig => ({
  id: null,
  cid: null,
  platformList: [],
  quotaMonitor: null,
});

// @Module({
//   dynamic: true, namespaced: true, name: 'account', store,
// })
// class Account extends VuexModule implements IState {

// }
// export default getModule(Account);