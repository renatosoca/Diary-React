import { Navigate, Route } from 'react-router-dom';
import { modulePrivateRoutes, privateRoutes } from '@/domain/entities';
import { RoutesWithNotFound } from '@/shared/providers';
import { lazy } from 'react';

const PrivateDiaryLayout = lazy(() => import('@/shared/layouts/PrivateDiaryLayout'));
const Home = lazy(() => import('@/app/pages/diary/home/HomePage'));

const PrivatePages = () => {
  const { HOME } = privateRoutes;

  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={modulePrivateRoutes.homePage} />} />

      <Route element={<PrivateDiaryLayout />}>
        <Route path={`${HOME}`} element={<Home />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default PrivatePages;
