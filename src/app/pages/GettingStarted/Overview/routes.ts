import { lazy } from 'solid-js';
const Overview = lazy(() => import('./screen'));

const routes = [
  {
    path: '/getting-started/overview',
    component: Overview,
  },
]

export default routes