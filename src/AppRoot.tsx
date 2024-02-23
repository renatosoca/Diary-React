import { lazy } from 'react';
import { ThemeProviderMaterial } from '@/shared/providers';
import { Toaster } from 'sonner';

const AppRoutes = lazy(() => import('@/app/routes/AppRoutes'));

function AppRoot() {
  return (
    <ThemeProviderMaterial>
      <AppRoutes />

      <Toaster richColors position="bottom-center" closeButton />
    </ThemeProviderMaterial>
  );
}

export default AppRoot;
