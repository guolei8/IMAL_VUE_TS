import VueRouter, { Route } from 'vue-router';
import { LoginModule } from '@/store';

export default (router: VueRouter) => {
  router.beforeEach(async (to: Route, from: Route, next: Function) => {
    if (to.path === '/login' || LoginModule.token) {
      next()
    } else {
      next('/login')
    }
  })
};
