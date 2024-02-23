import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProviderStore } from './shared/providers';
import './index.css';

const AppRoot = lazy(() => import('@/AppRoot'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderStore>
      <BrowserRouter>
        <Suspense fallback={'loading...'}>
          <AppRoot />
        </Suspense>
      </BrowserRouter>
    </ProviderStore>
  </React.StrictMode>
);
