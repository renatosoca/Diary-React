import { Navigate, Outlet } from 'react-router-dom';
import { modulePublicRoutes } from '@/domain/entities';
import { useAppSelector } from '@/shared/hooks';

const PrivateRouteGuard = () => {
  const { user } = useAppSelector(({ auth }) => auth);

  return (
    <>
      {user && <Outlet />}
      {!user && <Navigate to={modulePublicRoutes.loginPage} />}
    </>
  );
};
export default PrivateRouteGuard;
