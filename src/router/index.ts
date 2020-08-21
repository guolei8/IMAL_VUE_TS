import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './modules';
import routerPermission from './permission';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/sys/',
  routes,
});
console.log(routes)

routerPermission(router);

export default router;
