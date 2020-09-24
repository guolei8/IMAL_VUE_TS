import store from '@/store/store';
import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import { loginApi } from '@/api';
import { getToken, setToken, resetToken, setUserName, getUserName } from '@/utils/token';
import * as types from '../mutation-types';



interface userInfor {
  data: {
    token: string | ''
    uname: string | ''
  }
}
@Module({
  dynamic: true, namespaced: true, name: 'account', store,
})
class Login extends VuexModule {
  // 用户token
  public token = getToken() || ''
  public uname = getUserName() || ''

  // 用户登录
  @Action({ commit: types.SET_TOKEN, rawError: true })
  public async login(params: loginApi.ILogin) {
    const data = await loginApi.login(params);
    return data;
  }

  // 用户退出
  @Action({ commit: types.REMOVE_TOKEN })
  public async logout() {
    const data = await loginApi.logout();
    return data;
  }


  @Mutation
  private [types.SET_TOKEN](userInfor: userInfor) {
    console.log(userInfor)
    const { token, uname } = userInfor.data
    setToken(token);
    setUserName(uname)
  }

  @Mutation
  private [types.REMOVE_TOKEN]() {
  }
}
export default getModule(Login);