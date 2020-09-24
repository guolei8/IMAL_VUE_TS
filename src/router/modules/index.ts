import { RouteConfig } from 'vue-router';


import otherRoutes from './other';
import mainRoutes from './main';
import systemRoutes from './system'


const routes: RouteConfig[] = [
  ...otherRoutes,
  ...mainRoutes,
  ...systemRoutes
];

export default routes;
