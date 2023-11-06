import { lazy } from 'solid-js';
import * as Overview from "./Overview";
import * as Usage from "./Usage";

const GettingStarted = lazy(() => import('./screen'));

const routes = [
  ...Overview.routes,
  ...Usage.routes,
  {
    path: '/getting-started',
    component: GettingStarted,
  },
]

export default routes