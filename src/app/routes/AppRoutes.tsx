import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { publicRoutes } from '@/domain/entities';
import { RoutesWithNotFound } from '@/shared/providers';

const AuthPages = lazy(() => import('./public/AuthPages'));

const ProtectedPrivatePages = lazy(() => import('@/app/guards/PrivateRouteGuard'));
const PrivatePages = lazy(() => import('./private/PrivatePages'));

const AppRoutes = () => {
  const {
    AUTH: { PATH },
  } = publicRoutes;

  return (
    <RoutesWithNotFound>
      <Route path={`${PATH}/*`} element={<AuthPages />} />

      <Route element={<ProtectedPrivatePages />}>
        <Route path={`/*`} element={<PrivatePages />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default AppRoutes;
