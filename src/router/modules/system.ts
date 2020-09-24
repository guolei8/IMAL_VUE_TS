import { RouteConfig } from 'vue-router';

const routers: RouteConfig[] = [
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "mian" */ '@/views/Index.vue'),
    children: [
      {
        path: '/system',
        name: 'System',
        component: () => import(/* webpackChunkName: "system" */ '../../views/System/System.vue'),
      },
      {
        path: '/synchro',
        name: 'Synchro',
        component: () => import(/* webpackChunkName: "system" */ '../../views/System/Synchro.vue'),
      }
    ]
  }
];

export default routers;
