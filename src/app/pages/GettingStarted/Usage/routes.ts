import { lazy } from 'solid-js'
const Usage = lazy(() => import('./screen'))

const routes = [
  {
    path: '/getting-started/usage',
    component: Usage,
  },
]

export default routes