import { lazy } from 'react';

const AppRoutes = [
  {
    exact: true,
    path: '/',
    component: lazy(() =>
      import('./components/Authentication/Authentication.js'),
    ),
  },
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('./components/Loginization/Loginization.js')),
  },
  {
    exact: true,
    path: '/register',
    component: lazy(() => import('./components/Registration/Registration.js')),
  },
  {
    exact: true,
    path: '/profile/:id',
    component: lazy(() => import('./components/Profile/Profile.js')),
  },
];

export default AppRoutes;
