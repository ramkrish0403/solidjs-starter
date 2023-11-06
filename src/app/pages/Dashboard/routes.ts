import { lazy } from 'solid-js';
const Dashboard = lazy(() => import('./screen'));

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
]

export default routes