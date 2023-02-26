import { Routes, Route } from 'react-router-dom';

import { AuthRoutes, JournalRoutes, PrincipalRoutes } from './';
import { useCheckAuth } from '../hooks';
import { CheckingAuthentication } from '../components';

export const AppRoutes = () => {
  const { status } = useCheckAuth();

  if ( status === 'checking' ) return <CheckingAuthentication />;

  return (
    <Routes>

      {/* Publicas // Faltan Terminar // */}
      <Route path='/*' element={ <PrincipalRoutes /> } />

      {/* Login y Register */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />
      
      {/* Privada */}
      <Route path='/journal/*' element={ <JournalRoutes /> } />
    </Routes>
  )
}
