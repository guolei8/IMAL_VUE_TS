import VueRouter, { Route } from 'vue-router';


export default (router: VueRouter) => {
  router.beforeEach(async (to: Route, from: Route, next: Function) => {
    next()
  })
};
