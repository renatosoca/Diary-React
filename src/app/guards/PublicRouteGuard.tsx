import { Navigate, Outlet } from 'react-router-dom';
import { modulePrivateRoutes } from '@/domain/entities';
import { useAppSelector } from '@/shared/hooks';

const PublicRouteGuard = () => {
  const { user } = useAppSelector(({ auth }) => auth);

  return (
    <>
      {user && <Navigate to={modulePrivateRoutes.homePage} />}
      {!user && <Outlet />}
    </>
  );
};
export default PublicRouteGuard;
