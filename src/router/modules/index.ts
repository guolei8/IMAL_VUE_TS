import { RouteConfig } from 'vue-router';


import otherRoutes from './other';
import mainRoutes from './main'


const routes: RouteConfig[] = [
  ...otherRoutes,
  ...mainRoutes
];

export default routes;
