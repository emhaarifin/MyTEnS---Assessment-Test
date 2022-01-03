import { lazy } from 'react';
const routes = [
  {
    path: '/',
    name: 'HomePage',
    index: true,
    component: lazy(() => import('pages/Home')),
  },
];

export default routes;
