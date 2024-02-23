import { Route } from 'react-router-dom';
import { RoutesWithNotFound } from '@/shared/providers';
import { lazy } from 'react';
import { publicRoutes } from '@/domain/entities';

const ProtectedPublicPages = lazy(() => import('@/app/guards/PublicRouteGuard'));
const Login = lazy(() => import('@/app/pages/auth/login/LoginPage'));
const Register = lazy(() => import('@/app/pages/auth/register/RegisterPage'));

const AuthPages = () => {
  const {
    AUTH: { LOGIN, REGISTER },
  } = publicRoutes;

  return (
    <RoutesWithNotFound>
      <Route element={<ProtectedPublicPages />}>
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default AuthPages;
