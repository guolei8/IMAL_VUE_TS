import { RouteConfig } from 'vue-router';

const routers: RouteConfig[] = [
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "mian" */ '@/views/Index.vue'),
  }
];

export default routers;
