import { RouteConfig } from 'vue-router';

const routers: RouteConfig[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "other" */ '../../views/Login.vue'),
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "other" */ '@/views/404.vue'),
  },
];

export default routers;
